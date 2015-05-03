module.exports = function(config){
	config.set({

		basePath : '../',

		files : [],

		autoWatch : true,

		frameworks: ['jspm', 'jasmine'],

		browsers : ['Chrome'],

		plugins : [
			'karma-chrome-launcher',
			'karma-jasmine'
		],

		jspm: {
			config: '../system-config.js',
			loadFiles: [
				'test/unit/**/*.js'
			]
		},

		proxies: {
			'/jspm_packages': '/base/jspm_packages'
		}

	});
};