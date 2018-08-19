define([ "backbone", "handlebars", 
		"text!app/template/figureItemView.html" ], function(Backbone,
		Handlebars,  tpl) {

	var hbTemplate = Handlebars.compile(tpl);

	var FigureItemView = Backbone.View.extend({

		tagName : "option",

		template : hbTemplate,

		events : {
			"click" : "gotSelected"
		},

		initialize : function(args) {
			info("FigureItemView : [ENTER] : initialize");

			this.states = new Backbone.Model();

			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.states, "change", this.render);

		},

		render : function() {
			info("FigureItemView : [ENTER] : render");

			var data = this.model.toJSON();
			this.$el.html(this.template(data));
		},

		gotSelected : function() {
			info("FigureItemView : [ENTER] : gotSelected");

			this.trigger("itemSelected", this);
		}

	});

	return FigureItemView;
});