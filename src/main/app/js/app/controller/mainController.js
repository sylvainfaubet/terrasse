define(
		[ "backbone", "app/model/collection/figures",
				"app/model/collection/points", "app/model/figure",
				 "app/view/mainView",
				"app/view/dessinView", "app/view/editionFigureView",
				"app/view/infoFigureView", "app/view/choixFigureView", ],
		function(Backbone, Figures, Points, Figure,
				 MainView, DessinView, EditionFigureView,
				InfoFigureView, ChoixFigureView) {

			var MainController = Backbone.View
					.extend({

						initialize : function() {
							info("MainController : [ENTER] : initialize");
							this.views = {};
							this.collections = {};
							this.controllers = {};
							this.collections.figures = new Figures();
							this.collections.figures.fetch();
						},

						start : function() {
							info("MainController : [ENTER] : start");
							this.renderSocle();
							this.renderChoixFigures();
						},

						renderSocle : function() {
							info("MainController : [ENTER] : renderSocle");
							this.views.mainView = new MainView();
							this.$el.html(this.views.mainView.$el);
							this.views.mainView.render();
						},

						renderChoixFigures : function() {
							info("MainController : [ENTER] : renderChoixFigures");

							this.removeAllView();

							this.views.choixFigures = new ChoixFigureView({
								collection : this.collections.figures
							});

							this.$el.append(this.views.choixFigures.$el);

							this.listenTo(this.views.choixFigures, "ajout",
									this.ajouterFigure);
							this.listenTo(this.views.choixFigures, "edition",
									this.editerFigure);

							this.views.choixFigures.render();
						},

						ajouterFigure : function() {
							var nom = prompt("entrez le nom de la figure");
							if(nom){
								
							
							var figure = new Figure();
							this.collections.figures.add(figure);
							
							figure.set("name", nom);
							this.renderFigure(figure);
						}},

						editerFigure : function(itemView) {
							var figure = itemView.model;
							this.renderFigure(figure);
						},

						renderFigure : function(figure) {
							info("MainController : [ENTER] : renderChoixFigures");

							this.removeAllView();

							this.views.editionFigures = new EditionFigureView({
								model : figure
							});

							this.$el.append(this.views.editionFigures.$el);

							this.views.editionFigures.render();
						},

						removeAllView : function() {
							this.remove(this.views.editionFigures);
							this.remove(this.views.choixFigures);
						},

						remove : function(view) {
							if (view) {
								this.stopListening(view);
								view.remove();
							}
						}

					});

			return MainController;

		});
