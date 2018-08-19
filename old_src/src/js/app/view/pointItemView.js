define([ "backbone", "handlebars",
		"text!app/template/pointItemView.html" ], function(Backbone,
		Handlebars, tpl) {

	var hbTemplate = Handlebars.compile(tpl);

	var PointItemView = Backbone.View.extend({

		tagName : "option",

		template : hbTemplate,

		events : {
			"click" : "gotSelected"
		},

		initialize : function(args) {
			info("PointItemView : [ENTER] : initialize");

			this.states = new Backbone.Model();

			this.states.set("selected", false);

			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.states, "change", this.render);

		},

		render : function() {
			info("PointItemView : [ENTER] : render");
			var data = this.model.toJSON();

			this.$el.html(this.template(data));
			if (this.states.get("selected")) {
				this.$el.attr("selected","");
			}
		},

		gotSelected : function() {
			info("PointItemView : [ENTER] : gotSelected");
			this.trigger("itemSelected", this);
		}

	});

	return PointItemView;
});