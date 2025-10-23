module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "core/articles/books.njk",
      permalink: "blog/books/{{ title | slugify }}/index.html"
    }
};
