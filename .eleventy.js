const mathjaxPlugin = require('eleventy-plugin-mathjax');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css/style.css');
  eleventyConfig.addPassthroughCopy('src/js/script.js');
  eleventyConfig.addPassthroughCopy('**/*.pdf');
  eleventyConfig.addPlugin(mathjaxPlugin);

  return {
    dir: {
      input: 'src',
      output: 'docs',
    }
  }
}