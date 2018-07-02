module.exports = {

  options: {
    plugins: [
      { cleanupListOfValues: false },
      { convertPathData: true },
      { convertTransform: true },
      { minifyStyles: false },
      { removeUselessStrokeAndFill: false },
      { removeViewBox: false },
      {
        removeAttrs: {
          attrs: ['id', 'data-name', 'class']
        }
      }
    ]
  },
  dist: {
    files: [{ // files to be copied into root, eg. favicons, manifests, etc
      expand: true,
      cwd: '<%= srcPath %>/_icons',
      src: '**/*.svg',
      dest: '<%= srcPath %>/_icons-optimized'
    }],
    // files: {
    //   '<%= srcPath %>/_icons-optimized/' : '<%= srcPath %>/_icons/**/*.svg',
    // },
  },
};
