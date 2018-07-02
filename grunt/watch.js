module.exports = {
  tpl: {
    files: [
      '<%= srcPath %>/_patterns/**/*.twig',
      '<%= srcPath %>/_meta/*.twig',
      '<%= srcPath %>/_patterns/**/*.md',
      '<%= srcPath %>/**/*.json'
    ],
    tasks: [
      'templates-dev',
      // 'critical'
    ],
    options: {
      // spawn: false
    }
  },

  css: {
    files: ['<%= srcPath %>/_styles/**/*.scss'],
    tasks: [
      'styles-dev',
      'styles-aem'
    ],
    options: {
      // spawn: false
    }
  },

  js: {
    files: ['<%= srcPath %>/js/**/*.js'],
    tasks: [
      'scripts-dev',
      'templates-dev',
    ],
    options: {
      // spawn: false
    }
  },

  // icons: {
  // 	files: ['<%= srcPath %>/_icons/**/*'],
  // 	tasks: [
  // 		'icons',
  // 		'templates-dev'
  // 	],
  // 	options: {
  // 		// spawn: false
  // 	}
  // },

  assets: {
    files: [
      // '<%= corePath %>styleguide/**',
      '<%= srcPath %>/_to_root/**',
      '<%= srcPath %>/_to_css/**',
      '<%= srcPath %>/<%= astFolder %>/**',
      '<%= srcPath %>/<%= imgFolder %>/**',
      // '<%= srcPath %>/fonts/**',
    ],
    tasks: [
      'sync'
    ],
    options: {
      // spawn: false
    }
  },
};
