
const collection = (eleventyConfig) => {

  eleventyConfig.addCollection("mathposts", function(collection) {
    const coll = collection.getFilteredByTag("math");

    for(let i = 0; i < coll.length ; i++) {
        const prevPostmath = coll[i-1];
        const nextPostmath = coll[i + 1];

        coll[i].data["prevPostmath"] = prevPostmath;
        coll[i].data["nextPostmath"] = nextPostmath;
    }

    return coll;
});
}

module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "pages/mathpost.njk",
      permalink: "blog/math/{{ title | slugify }}/index.html"
    },

};