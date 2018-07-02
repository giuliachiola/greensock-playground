module.exports = {

  // join 'json' pages configurations
  // json: {
  //   options: {},
  //   files: [{
  //     expand: true,
  //     cwd: '<%= srcPath %>/_patterns-data',
  //     src: ['**/*.json', '!**/_*.json'],
  //     dest: '<%= srcPath %>/_patterns'
  //   }]
  // },

  // 'dev' builds
  dev: {
    options: {},
    files: {
      '<%= dstPath %>/js/main.js' : '<%= srcPath %>/js/main.js',
    },
  },

  // 'dist' builds
  dist: {
    options: {},
    files: {
      '<%= dstPath %>/js/main.ext.js' : '<%= srcPath %>/js/main.js',
    },
  },

  icons: {
    options: {},
    files: [{
      expand: true,
      cwd: '<%= dstPath %>/patterns',
      src: '**/*.html',
      dest: '<%= dstPath %>/patterns'
    }]
  }
};
