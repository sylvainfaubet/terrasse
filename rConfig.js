/*
 * Configuration du plugin maven requirejs-maven-plugin afin de transformer le js 
 * afin de permettre la minification.
 * 
 * Exemple de configuration : https://github.com/jrburke/r.js/blob/master/build/example.build.js
 * 
 */
({

	baseUrl : 'src/js',

	paths : {
		appName : "terrasse",

		app : "app",

		handlebars : "lib/handlebars-v3.0.3",
		backbone : "lib/backbone",
		bootstrap : "lib/bootstrap",
		localstorage : "lib/backbone-localstorage",
		underscore : "lib/underscore-min",
		jquery : "lib/jquery-1.11.3.min",
		text : "lib/text",

	},

	// Permet de compresser les templates intégrer par text!
	inlineText : true,

	// How to optimize all the JS files in the build output directory.
	// Right now only the following values
	// are supported:
	// - "uglify": (default) uses UglifyJS to minify the code.
	// - "uglify2": in version 2.1.2+. Uses UglifyJS2.
	// - "closure": uses Google's Closure Compiler in simple optimization
	// mode to minify the code. Only available if running the optimizer using
	// Java.
	// - "closure.keepLines": Same as closure option, but keeps line returns
	// in the minified files.
	// - "none": no minification will be done.
	optimize : "uglify2",

	generateSourceMaps : true,
	preserveLicenseComments : false,

	/*
	 * packages: ['app/mrh'], name: 'app/mrh', out:
	 * '../../../target/generated-sources/app/mrh/main.js'
	 */

	// Suppression des scripts
	removeCombined : true,

	// Déclaration des modules
	modules : [ {
		// Emplacement du module
		name : "app/main",
		// Liste des éléments à exclure du module
		exclude :[] 
			//[ "text", "jquery", "backbone", "underscore","handlebars"]
	} ],

	// Regex sur les fichiers à exclure
	fileExclusionRegExp : /^(json)$/,

	// Emplacement des fichiers générés
	dir : 'target/generated-sources'

})
