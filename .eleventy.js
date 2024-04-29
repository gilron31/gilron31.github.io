const mathjaxPlugin = require('eleventy-plugin-mathjax');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css/style.css');
  eleventyConfig.addPassthroughCopy('src/js/script.js');
  eleventyConfig.addPassthroughCopy('**/*.pdf');
  eleventyConfig.addPlugin(mathjaxPlugin, {
    output: 'chtml',
    chtml: {
      fontURL:
          'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2',
    },
  });
  eleventyConfig.addPlugin(syntaxHighlight);


  return {
    dir: {
      input: 'src',
      output: 'docs',
    }
  }
};