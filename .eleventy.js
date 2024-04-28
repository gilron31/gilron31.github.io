module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css/style.css');
  eleventyConfig.addPassthroughCopy('src/js/script.js');
  eleventyConfig.addPassthroughCopy('**/*.pdf');
  return {
    dir: {
      input: 'src',
      output: 'docs',
    }
  }
}