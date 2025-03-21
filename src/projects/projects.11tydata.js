module.exports = {
  eleventyComputed: {
    title: (data) => data.title || data.page.filePathStem.split("/").pop(),
    layout: "core/post.njk",
    permalink: "projects/{{ title | slugify }}/index.html",
  },
};
