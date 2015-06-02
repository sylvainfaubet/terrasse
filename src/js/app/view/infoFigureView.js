define([ "backbone", "handlebars", 
		"text!app/template/infoFigureView.html", "app/outils/geometrie" ],
		function(Backbone, Handlebars, tpl, Geometrie) {

			var hbTemplate = Handlebars.compile(tpl);

			var InfoFigureView = Backbone.View.extend({

				template : hbTemplate,
				className :"col-md-3",

				events : {

				},

				initialize : function(args) {
					info("InfoFigureView : [ENTER] : initialize");

					this.listenTo(this.collection, "all", this.render);
				},

				render : function() {
					info("InfoFigureView : [ENTER] : render");

					var data = {};
					var collection = (this.collection.toJSON());

					data.perimetre = Geometrie.perimetrePolygone(collection);
					data.airePolygone = Geometrie.airePolygone(collection);

					this.$el.html(this.template(data));
				}

			});

			return InfoFigureView;
		});