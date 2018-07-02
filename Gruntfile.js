var path = require('path');

var options = {

	// here you can pass options to jit-grunt (or just jitGrunt: true)
	// jitGrunt: {
	// 	staticMappings: {
	// 		// load grunt dependencies such as grunt.loadNpmTasks('your_package');
	// 		// by specifying them in the following list of mappings
	// 		includereplace: 'grunt-include-replace',
	// 	}
	// },
	// jitGrunt: true,

	data: {
		srcPath:        'source',	// source files root path (dev)
		dstPath:        'public',	// destination files root path (dist)
		expPath:        'export',	// destination files root path (export)
		astFolder:      'assets', // assets folder name
		imgFolder:      'images', // images folder name
		corePath:       'core',		// core / styleguide (only needed for patternLab)

		// target(s) for pagespeed insight performance tests
		// testPage:		'/patterns/04-pages-00-homepage-en/04-pages-00-homepage-en.html',
		// testPage1:		'/patterns/04-pages-00-homepage-en/04-pages-00-homepage-en.html',
		// testPage2:		'/patterns/04-pages-00-homepage-it/04-pages-00-homepage-it.html',
		// testPage3:		'/patterns/04-pages-04-performancedesign-en/04-pages-04-performancedesign-en.html',
		// testPage4:		'/patterns/04-pages-04-performancedesign-it/04-pages-04-performancedesign-it.html',

		// testServerPort: 9000,
  },
  overridePath: path.join(process.cwd(), 'grunt_' + process.env.USER)
};

module.exports = function(grunt) {

	// https://github.com/sindresorhus/time-grunt
	require('time-grunt')(grunt);

	// https://github.com/firstandthird/load-grunt-config
	require('load-grunt-config')(grunt, options);

};
