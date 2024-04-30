module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "pages/post.njk",
      permalink: "blog/p/{{ title | slugify }}/index.html"
    }
};