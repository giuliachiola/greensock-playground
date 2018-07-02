module.exports = {

  dev: {
    bsFiles: {
      src: [
        '<%= dstPath %>/css/*.css',
        '<%= dstPath %>/patterns/00-design/index.html',
        // '<%= dstPath %>/latest-change.txt',
      ]
    },
    options: {
      reloadDelay: 1000, // wait for full html/js compilation
      watchTask: true,
      ghostMode: false,
      server: {
        baseDir: '<%= dstPath %>',
      },
      browser: 'Google Chrome Canary'
    },
  },

  dist: {
    options: {
      watchTask: true,
      ghostMode: false,
      server: {
        baseDir: '<%= dstPath %>',
      },
      open: false,
      tunnel: '',
    },
  },
};
