module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "core/pages.njk",
      permalink: "/{{ title | slugify }}/index.html"
    }
};
