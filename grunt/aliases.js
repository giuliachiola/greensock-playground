module.exports = {

  'default': {
    description: 'Build project for development + start local server & watcher',
    tasks: [
      'build-dev',
      'serve-dev',
    ]
  },

  'build': {
    description: 'Build project for deployment (dist)',
    tasks: [
      'clean:dist',		// delete dist dir
      // 'icons',			// icons
      'sync:all',			// other assets (images)
      'styles-dist',		// css
      'styles-aem',		// css
      'scripts-dist',		// js
      'templates-dist',		// html
    ]
  },

  'build-dev': {
    description: 'Build project for development (dev)\n',
    tasks: [
      'clean:dev',		// delete dev dir
      // 'icons',			// icons
      'sync:all',			// other assets (images)
      'styles-dev',		// css
      'styles-aem',		// css
      'scripts-dev',		// js
      'templates-dev',	// html
    ]
  },

  'build-perf': {
    description: 'Build project for optimization test (perf)',
    tasks: [
      'clean:perf',		// delete dist dir
      // 'icons',			// icons
      'sync:all',			// other assets (images)
      'styles-dist',		// css
      'styles-aem',		// css
      'scripts-dist',		// js
      'templates-perf',		// html
    ]
  },

  // 'perf-ng': {
  // 	description: 'Run performance analysis on local server (ngrok)',
  // 	tasks: [
  // 		// 'build',				// build project for deployment
  // 		'connect',				// run local server
  // 		'psi-ngrok',			// run pagespeed insight test against target page
  // 	]
  // },

  // 'perf-lt': {
  // 	description: 'Run performance analysis on local server (localtunnel)',
  // 	tasks: [
  // 		// 'build',				// build project for deployment
  // 		'browserSync:dist',		// run local server + localtunnel
  // 		'pagespeed:locd',		// run pagespeed insight against target page (desktop)
  // 		'pagespeed:locm',		// run pagespeed insight against target page (mobile)
  // 	]
  // },

  // 'perf-stage': {
  // 	description: 'Run performance analysis on staged site (modo.staging.modo.md)',
  // 	tasks: [
  // 		'perfbudget:stg',	// WebPageTest - https://github.com/tkadlec/grunt-perfbudget
  // 		'pagespeed:stgd',	// Pagespeed Insights (desktop) - https://github.com/jrcryer/grunt-pagespeed
  // 		'pagespeed:stgm',	// Pagespeed Insights (mobile) - https://github.com/jrcryer/grunt-pagespeed
  // 	]
  // },

  // 'perf-prod': {
  // 	description: 'Run performance analysis on live site (modo.md)\n\n\nNOTE: you should just ignore the next tasks\n-------------------------------------------',
  // 	tasks: [
  // 		'perfbudget:prd',	// WebPageTest - https://github.com/tkadlec/grunt-perfbudget
  // 		'pagespeed:prdd',	// Pagespeed Insights (desktop) - https://github.com/jrcryer/grunt-pagespeed
  // 		'pagespeed:prdm',	// Pagespeed Insights (mobile) - https://github.com/jrcryer/grunt-pagespeed
  // 	]
  // },


  /*
   *  There should be no need to run the following tasks individually
   */

  // 'icons': {
  // 	description: 'Build and optimize icons',
  // 	tasks: [
  // 		'shell:icons',
  // 		'grunticon:default'
  // 	]
  // },

  'styles-dev': {
    description: 'Compile stylesheets for development (dev)',
    tasks: [
      'sass:dev',
      'postcss:dev',
    ]
  },

  'styles-aem': {
    description: 'Compile stylesheets for deployment (dist)',
    tasks: [
      'sass:aem',
      'postcss:aem',
    ]
  },

  'styles-dist': {
    description: 'Compile stylesheets for deployment (dist)',
    tasks: [
      'sass:dist',
      'postcss:dist',
    ]
  },

  'scripts-dev': {
    description: 'Compile scripts for development (dev)',
    tasks: [
      'import:dev',
      // 'uglify:dev',
    ]
  },

  'scripts-dist': {
    description: 'Compile scripts for deployment (dist)',
    tasks: [
      'import:dist',
      'uglify:dist',
    ]
  },

  'templates-dev': {
    description: 'Compile templates for development (dev)',
    tasks: [
      // 'import:json',
      'shell:patternlab',
      'import:icons',
      // 'includereplace:default',
      // 'replace:default',
    ]
  },

  'templates-dist': {
    description: 'Compile templates for deployment (dist)',
    tasks: [
      // 'import:json',
      'shell:patternlab',
      'import:icons',
      'clean:patternlab',
      'shell:killLab',
      // 'includereplace:default',
      // 'replace:default',
      // 'connect:server',
      // 'critical:dist',
      // 'criticalcss:dist',
      // 'includereplace:critical', // inline criticalcss
      'htmlmin'
    ]
  },

  'templates-perf': {
    description: 'Compile templates for deployment (dist)',
    tasks: [
      // 'import:json',
      'shell:patternlab_exp',
      'import:icons',
      'clean:patternlab',
      'shell:killLab',
      // 'includereplace:default',
      // 'replace:default',
      // 'connect:server',
      // 'critical:dist',
      // 'criticalcss:dist',
      // 'includereplace:critical', // inline criticalcss
      'htmlmin'
    ]
  },

  'serve-dev': {
    description: 'Run local server + watcher (dev)',
    tasks: [
      'browserSync:dev',		// local server + livereload
      'watch',				// watch changes
    ]
  },

  'icons': {
    description: 'Build icon sprite(s)',
    tasks: [
      'clean:icons',
      'svgmin:dist',
      'svgstore:dist', // warning: <defs> section must be deleted manually -- check if there are special definitions and move to css
    ]
  }
}
