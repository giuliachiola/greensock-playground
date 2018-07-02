module.exports = {

  // common post-processing options
  options: {
  },

  // post-processing options specific to 'dev' builds
  dev: {
    options: {
      map: {
        inline: true   // inline sourcemaps
      },
      processors: [
        require('postcss-cssnext')({
          browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 8'],
          compress: false,
          sourcemap: true
        })
      ]
    },
    src: '<%= dstPath %>/css/style.css'
  },

  // post-processing options specific to 'aem' builds
  aem: {
    options: {
      map: false,
      processors: [
        require('postcss-cssnext')({
          browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 8'],
          compress: false,
          sourcemap: false
        }),
        require('cssnano')({
          autoprefixer: false,
          functionOptimiser: false,
          minifySelectors: false, // breaks bless
          uniqueSelectors: false,
          zindex: false
        })
      ]
    },
    src: '<%= dstPath %>/css-aem/style.css'
  },

  // post-processing options specific to 'dist' builds
  dist: {
    options: {
      map: false,
      processors: [
        require('postcss-cssnext')({
          browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 8'],
          compress: false,
          sourcemap: false
        }),
        require('cssnano')({
          autoprefixer: false,
          functionOptimiser: false,
          minifySelectors: false, // breaks bless
          uniqueSelectors: false,
          zindex: false
        })
      ]
    },
    src: '<%= dstPath %>/css/style.css'
  },
};
