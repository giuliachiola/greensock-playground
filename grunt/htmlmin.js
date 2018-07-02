module.exports = {

  perf: {
    options: {
      removeComments: true,
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
      minifyCSS: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    },

    files: [{
      expand: true,
      cwd: '<%= dstPath %>/patterns',
      src: '**/*.html',
      dest: '<%= dstPath %>/patterns'
    }]
  }
};
