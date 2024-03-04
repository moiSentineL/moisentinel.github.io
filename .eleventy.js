const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownItAnchor = require('markdown-it-anchor');
const readingTime = require('eleventy-plugin-reading-time');


// Heading Anchor stuff
const position = {
    false: "push",
    true: "unshift",
}
  
  // Copied directly from the plugin source code, with one edit
  // (marked with comments)
const renderPermalink = (slug, opts, state, idx) => {
    const space = () =>
      Object.assign(new state.Token("text", "", 0), {
        content: " ",
      })
  
    const linkTokens = [
      Object.assign(new state.Token("link_open", "a", 1), {
        attrs: [
          ["class", opts.permalinkClass],
          ["href", opts.permalinkHref(slug, state)],
        ],
      }),
      Object.assign(new state.Token("html_block", "", 0), {
        // Edit starts here:
        content: `<span aria-hidden="true" class="header-anchor__symbol">#</span>
        <span class="screen-reader-only">Direct link to this section</span>`,
        // Edit ends
      }),
      new state.Token("link_close", "a", -1),
    ]
  
    if (opts.permalinkSpace) {
      linkTokens[position[!opts.permalinkBefore]](space())
    }
    state.tokens[idx + 1].children[position[opts.permalinkBefore]](
      ...linkTokens
    )
}
// Heading anchor stuff end


module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(readingTime);
    
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<-->"
      });
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/media");

    eleventyConfig.addFilter("formatDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });     

    let markdownOptions = {
        html: true,
        breaks: true,
        linkify: true
    };
    const markdownItAnchorOptions = {
        permalink: true,
        renderPermalink
    }
    let markdownLib = new markdownIt(markdownOptions).use(markdownItAnchor, markdownItAnchorOptions);

    //Add div around tables
    markdownLib.renderer.rules.table_open = () => '<div class="table-wrapper">\n<table>\n',
    markdownLib.renderer.rules.table_close = () => '</table>\n</div>',

    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addCollection("posts", function(collection) {
        const coll = collection.getFilteredByTag("post");
    
        for(let i = 0; i < coll.length ; i++) {
            const prevPost = coll[i-1];
            const nextPost = coll[i + 1];
    
            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }
    
        return coll;
    });
    eleventyConfig
    .addFilter('postTags', tags => Object.keys(tags)
        .filter(k => k !== "posts")
        .filter(k => k !== "post")
        .filter(k => k !== "all")
        .map(k => ({name: k, count: tags[k].length}))
        .sort((a,b) => b.count - a.count));

    return {
        dir: {
          input: 'src',
          includes: '_includes',
          layouts: '_layouts',
          data: '_data'
        }
    };  
};