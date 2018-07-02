module.exports = {

  // sass stylesheets compilation options specific to 'dev' builds
  dev: {
    options: {
      outputStyle: 'expanded',
      includePaths: ['bower_components'],
      // outFile: '<%= dstPath %>/css/style.css',
      sourceMap: true,
      // sourceMapEmbed: false,
      sourceMapRoot: '/'
    },
    files: {
      '<%= dstPath %>/css/style.css': '<%= srcPath %>/_styles/style.scss'
    }
  },

  // sass stylesheets compilation options specific to 'aem' build
  aem: {
    options: {
      outputStyle: 'compressed',
      includePaths: ['bower_components'],
      sourceMap: false,
      // sourceMapEmbed: false,
      // sourceMapRoot: './'
    },
    files: {
      '<%= dstPath %>/css-aem/style.css': '<%= srcPath %>/_styles/style-aem.scss'
    }
  },

  // sass stylesheets compilation options specific to 'dist' builds
  dist: {
    options: {
      outputStyle: 'compressed',
      includePaths: ['bower_components'],
      sourceMap: false,
      // sourceMapEmbed: false,
      // sourceMapRoot: './'
    },
    files: {
      '<%= dstPath %>/css/style.css': '<%= srcPath %>/_styles/style.scss'
    }
  },
};
