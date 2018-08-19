define(["handlebars"], function(Handlebars) {

	/**
	 * Déclaration des fonctions de templating
	 */
	try {
		Handlebars.registerHelper('if_eq', function(a, b, opts) {
			if (a == b) {
				return opts.fn(this);
			}
			return opts.inverse(this);
		});
		Handlebars.registerHelper('if_diff', function(a, b, opts) {
			if (a != b) {
				return opts.fn(this);
			}
			return opts.inverse(this);
		});
		Handlebars.registerHelper('if_gt', function(a, b, opts) {
			if (a > b) {
				return opts.fn(this);
			}
			return opts.inverse(this);
		});
		Handlebars.registerHelper('if_lt', function(a, b, opts) {
			if (a < b) {
				return opts.fn(this);
			}
			return opts.inverse(this);
		});
		Handlebars.registerHelper('if_contains', function(liste, elem, opts) {
			if (liste instanceof Array && liste.indexOf(elem) > -1) {
				return opts.fn(this);
			}
			return opts.inverse(this);
		});
		
		
		Handlebars.registerHelper("get", function(map, prefix, suffix, opts) {
			if(map && (prefix || suffix)){
				return map[prefix + suffix];
			}else{
				return map + prefix + suffix;
			}
		});

	} catch (e) {
	}
});