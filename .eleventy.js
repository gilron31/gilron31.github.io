const mathjaxPlugin = require('eleventy-plugin-mathjax');


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

  return {
    dir: {
      input: 'src',
      output: 'docs',
    }
  }
};