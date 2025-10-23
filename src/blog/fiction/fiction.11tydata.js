module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "core/articles/fiction.njk",
      permalink: "blog/fiction/{{ title | slugify }}/index.html"
    }
};
