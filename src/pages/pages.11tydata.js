module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "core/pages.njk",
      permalink: data => data.perma ? data.perma : `/{{ title | slugify }}/index.html`
    }
};
