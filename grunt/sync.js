module.exports = {
  all: {
    files: [{ // files to be copied into root, eg. favicons, manifests, etc
      expand: true,
      cwd: '<%= srcPath %>/_to_root',
      src: '**',
      dest: '<%= dstPath %>'
    },{ // files to be copied into css, eg. grunticon data
      expand: true,
      cwd: '<%= srcPath %>/_to_css',
      src: '**',
      dest: '<%= dstPath %>/css'
    },{ // assets
      expand: true,
      cwd: '<%= srcPath %>',
      src: '<%= astFolder %>/**',
      dest: '<%= dstPath %>'
    },{ // images
      expand: true,
      cwd: '<%= srcPath %>',
      src: '<%= imgFolder %>/**',
      dest: '<%= dstPath %>'
    },{ // fonts
      expand: true,
      cwd: '<%= srcPath %>',
      src: 'fonts/**',
      dest: '<%= dstPath %>'
    }],
    // pretend: true, // Don't do any disk operations - just write log. Default: false
    verbose: true, // Default: false
    failOnError: true, // Fail the task when copying is not possible. Default: false
    updateAndDelete: false, // Remove all files from dest that are not found in src. Default: false
    compareUsing: "md5",  // compare via checksum not date, will not copy files that have not changed (better for SFT sync)
  },
};
