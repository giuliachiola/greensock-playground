module.exports = {

  options: {
    prefix : 'icon-', // This will prefix each ID
    cleanupdefs: true,
    generateSprite: true,
    svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
      // viewBox : '0 0 100 100',
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink'
    },
  },
  dist: {
    files: {
      '<%= srcPath %>/<%= astFolder %>/icons.svg': ['<%= srcPath %>/_icons-optimized/**/*.svg'],
    },
  }
};
