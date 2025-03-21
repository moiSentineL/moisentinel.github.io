module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "core/mathpost.njk",
      permalink: "blog/math/{{ title | slugify }}/index.html"
    },

};
