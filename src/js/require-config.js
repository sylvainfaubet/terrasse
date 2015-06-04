/*global require */
requirejs.config({

	baseUrl : "/js/lib",

	shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'localstorage': {
            deps: ['backbone']
            
        },
		'bootstrap':{
			deps:['jquery']
		}
    },
	
	// Location of libraries
	paths : {

		app : "../app",
		
		handlebars : "handlebars-v3.0.3",
		backbone : "backbone",
		bootstrap : "bootstrap",
		localstorage : "backbone-localstorage",
		underscore : "underscore-min",
		jquery : "jquery-1.11.3.min",
		text : "text",
	},

});

requirejs(["bootstrap","app/main"]);
