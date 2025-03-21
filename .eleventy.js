const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownItAnchor = require("markdown-it-anchor");
const readingTime = require("eleventy-plugin-reading-time");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItMath = require("markdown-it-mathjax3");
const markdownItVideo = require("markdown-it-video");
const path = require("path");
const Image = require("@11ty/eleventy-img");

// Image processing functions
async function processImage(src, alt, sizes, widths) {
  let metadata = await Image(src, {
    widths,
    formats: ["webp", "jpeg"],
    outputDir: "./_site/images/",
    urlPath: "/images/",
    filenameFormat: (id, src, width, format) => {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

async function portraitimageShortcode(
  src,
  alt,
  sizes = "(min-width: 650px) 1vw, 50vw"
) {
  return processImage(src, alt, sizes, [500]);
}

async function landimageShortcode(
  src,
  alt,
  sizes = "(min-width: 650px) 1vw, 50vw"
) {
  return processImage(src, alt, sizes, [900, 1500]);
}

// Heading Anchor configuration
const position = {
  false: "push",
  true: "unshift",
};

const renderPermalink = (slug, opts, state, idx) => {
  const space = () =>
    Object.assign(new state.Token("text", "", 0), { content: " " });

  const linkTokens = [
    Object.assign(new state.Token("link_open", "a", 1), {
      attrs: [
        ["class", opts.permalinkClass],
        ["href", opts.permalinkHref(slug, state)],
      ],
    }),
    Object.assign(new state.Token("html_block", "", 0), {
      content: `<span aria-hidden="true" class="header-anchor__symbol">#</span>`,
    }),
    new state.Token("link_close", "a", -1),
  ];

  if (opts.permalinkSpace) {
    linkTokens[position[!opts.permalinkBefore]](space());
  }
  state.tokens[idx + 1].children[position[opts.permalinkBefore]](...linkTokens);
};

module.exports = function (eleventyConfig) {
  // Add shortcodes and plugins
  eleventyConfig.addLiquidShortcode("porimage", portraitimageShortcode);
  eleventyConfig.addLiquidShortcode("lanimage", landimageShortcode);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.ignores.delete("**/README.md/**");

  // Configure front matter parsing
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<-->",
  });

  // Configure BrowserSync
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/css/**/*.css",
  });

  // Passthrough file copy
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Add date formatting filter
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Configure Markdown
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownItAnchorOptions = {
    permalink: true,
    renderPermalink,
  };

  const markdownLib = new markdownIt(markdownOptions)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItFootnote)
    .use(require("markdown-it-imsize"), { autofill: true })
    .use(markdownItAttrs)
    .use(markdownItMath, { tex: { tags: "equ" } })
    .use(markdownItVideo, {
      youtube: { width: 640, height: 390 },
      vimeo: { width: 500, height: 281 },
      vine: { width: 600, height: 600, embed: "simple" },
      prezi: { width: 550, height: 400 },
    });

  // Customize Markdown rendering
  markdownLib.renderer.rules.table_open = () =>
    '<div class="table-wrapper">\n<table>\n';
  markdownLib.renderer.rules.table_close = () => "</table>\n</div>";
  markdownLib.renderer.rules.footnote_block_open = () =>
    "<hr>" +
    '<h4 class="mt-3">Footnotes</h4>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n';

  markdownLib.renderer.rules.footnote_ref = function (
    tokens,
    idx,
    options,
    env,
    slf
  ) {
    const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
    let refid = id;

    if (tokens[idx].meta.subId > 0) refid += `:${tokens[idx].meta.subId}`;

    return `<sup class="footnote-ref"><a class="footnote-link" href="#fn${id}" id="fnref${refid}">${caption}</a></sup>`;
  };

  eleventyConfig.setLibrary("md", markdownLib);

  // Create collections
  eleventyConfig.addCollection("posts", function (collection) {
    const coll = collection.getFilteredByTag("post");

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  eleventyConfig.addCollection("mathposts", function (collection) {
    const colle = collection.getFilteredByGlob("src/blog/math/*.md");

    for (let i = 0; i < colle.length; i++) {
      const prevPostmath = colle[i - 1];
      const nextPostmath = colle[i + 1];

      colle[i].data["prevPostmath"] = prevPostmath;
      colle[i].data["nextPostmath"] = nextPostmath;
    }

    return colle;
  });

  eleventyConfig.addCollection("mypages", function (collection) {
    const page_collection = collection.getFilteredByGlob("src/pages/*.md");

    for (let i = 0; i < page_collection.length; i++) {
      const prevPage = page_collection[i - 1];
      const nextPage = page_collection[i + 1];

      page_collection[i].data["prevPage"] = prevPage;
      page_collection[i].data["nextPage"] = nextPage;
    }

    return page_collection;
  });

  // Add filter for post tags
  eleventyConfig.addFilter("postTags", (tags) =>
    Object.keys(tags)
      .filter((k) => !["posts", "post", "all", "mathposts", "mypages"].includes(k))
      .map((k) => ({ name: k, count: tags[k].length }))
      .sort((a, b) => b.count - a.count)
  );

  // Configure input/output directories
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
