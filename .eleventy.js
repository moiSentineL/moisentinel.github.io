const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    
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
    let markdownLib = new markdownIt(markdownOptions);

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