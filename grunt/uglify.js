module.exports = {

	// 'dev' builds
  dev: {
  },

	// 'dist' builds
  dist: {
    options: {
      compress: false,
      sourceMap: false
    },
    files: {
      '<%= dstPath %>/js/main.js' : '<%= dstPath %>/js/main.ext.js',
    },
  },
};
