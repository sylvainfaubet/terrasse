define([ "backbone", "handlebars", 
		"text!app/template/infoFigureView.html", "app/outils/geometrie" ],
		function(Backbone, Handlebars, tpl, Geometrie) {

			var hbTemplate = Handlebars.compile(tpl);

			var InfoFigureView = Backbone.View.extend({

				template : hbTemplate,
				className:"modal",

				events : {

				},

				initialize : function(args) {
					info("InfoFigureView : [ENTER] : initialize");

					this.render();
					
					this.$el.modal();
				},

				render : function() {
					info("InfoFigureView : [ENTER] : render");

					var data = {};
					var collection = (this.model.get("points").toJSON());

					data.perimetre = Geometrie.perimetrePolygone(collection);
					data.airePolygone = Geometrie.airePolygone(collection);
					data.aireRectangle = Geometrie.aireRectangleEnglobant(collection);

					this.$el.html(this.template(data));
				}

			});

			return InfoFigureView;
		});