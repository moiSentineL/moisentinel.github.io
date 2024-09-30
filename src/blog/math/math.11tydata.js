module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "pages/mathpost.njk",
      permalink: "blog/math/{{ title | slugify }}/index.html"
    },

};