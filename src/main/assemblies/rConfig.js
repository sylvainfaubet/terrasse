({

	baseUrl: '../../../src/main',

//	mainConfigFile : '../app/js/require-config.js',
	
	optimize: "uglify",
	
	modules: [
		{
			name: "app/js/app/main",
		}
	],
	
	
	dir: '../../../target/generated-sources'

})
