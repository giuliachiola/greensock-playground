module.exports = {

  options: {
    'no-write': false,
    'force': false
  },

  // paths to be cleaned in 'dev' builds
  dev: [
    '<%= dstPath %>'
  ],

  // paths to be cleaned in 'dist' builds
  dist: [
    '<%= dstPath %>'
  ],

  // paths to be cleaned in 'perf' builds
  perf: [
    '<%= expPath %>'
  ],

  // paths to be cleaned for 'icons' sprite build
  icons: [
    '<%= srcPath %>/_icons-optimized'
  ],

  // delete unneeded patternlab-generated files
  patternlab: [
    '<%= dstPath %>/patterns/**/*.twig',
    '<%= dstPath %>/patterns/**/*.escaped.html',
    '<%= dstPath %>/patterns/**/*.markup-only.html'
  ]
};
