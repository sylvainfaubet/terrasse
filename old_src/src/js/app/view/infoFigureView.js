define([ "backbone", "handlebars", "text!app/template/infoFigureView.html",
		"app/outils/geometrie", "app/outils/configuration", "bootstrap" ],
		function(Backbone, Handlebars, tpl, Geometrie, Configuration) {

			var hbTemplate = Handlebars.compile(tpl);

			var InfoFigureView = Backbone.View.extend({

				template : hbTemplate,
				className : "modal",

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
					var config = new Configuration().toJSON();
					var minMax = Geometrie.minMax(collection);
					var longueurX = Geometrie.longueurAxe(minMax.xmin,
							minMax.xmax);
					var longueurY = Geometrie.longueurAxe(minMax.ymin,
							minMax.ymax);

					var ecartX = Geometrie.calculEcart(longueurX,
							config.structure.minEcartDirect,
							config.structure.maxEcartDirect, 
							config.structure.bordMinDirect,
							config.structure.bordMaxDirect);
					var ecartY = Geometrie.calculEcart(longueurY,
							config.structure.minEcartIndirect,
							config.structure.maxEcartIndirect,
							config.structure.bordMinIndirect,
							config.structure.bordMaxIndirect);

					data.perimetre = Geometrie.perimetrePolygone(collection);
					data.airePolygone = Geometrie.airePolygone(collection);
					data.chutes = (data.airePolygone * 0.07);
					
					data.aireRectangle = Geometrie
							.aireRectangleEnglobant(collection);
					data.longueurRectX = longueurX;
					data.longueurRectY = longueurY;
					
					data.ecartX = ecartX.entraxe;
					data.nombreLambourdesX = ecartX.nbEntraxes + 1;
					data.bordX = ecartX.bord;
					data.ecartY = ecartY.entraxe;
					data.nombreLambourdesY = ecartY.nbEntraxes + 1;
					data.bordY = ecartY.bord;
					
					this.$el.html(this.template(data));
				}

			});

			return InfoFigureView;
		});