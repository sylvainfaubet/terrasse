define(
		[ "backbone", "handlebars", "text!app/template/pointListView.html",
				"app/model/point", "app/view/pointItemView",
				"app/view/pointView" ],
		function(Backbone, Handlebars, tpl, Point, PointItemView, PointView) {

			var hbTemplate = Handlebars.compile(tpl);

			var PointListView = Backbone.View
					.extend({

						// tagName:"ul",
						template : hbTemplate,

						events : {
							"click #ajouter" : "newPoint",
							"click #supprimer" : "supprimerElem",
							"click #modifier" : "modifierElem",

						},

						initialize : function(args) {
							info("PointListView : [ENTER] : initialize");
							this.itemViewArray = new Array();

							this.views = {};

							this.listenTo(this.collection, "all", this.render);

						},

						render : function() {
							info("PointListView : [ENTER] : render");

							var data = {};
							this.$el.html(this.template(data));
							this.$elList = this.$("#liste");
							this.renderList(this.collection);
						},

						renderList : function(collection) {
							info("PointListView : [ENTER] : renderList");
							var listElem = this.$elList;
							this.removeOldItemView();

							for ( var i = 0; i < collection.length; i++) {
								var itemView = this.renderItem(
										collection.models[i], i);

								if (itemView === null) {
									continue;
								}

								this.itemViewArray.push(itemView);

								listElem.append(itemView.$el);

								if (i == 0) {
									this.selectedItem = itemView;
								}
							}

						},

						renderItem : function(model, numero) {
							info("PointListView : [ENTER] : renderItem");

							var itemView = new PointItemView({
								model : model
							});

							itemView.render();

							this.listenTo(itemView, "itemSelected",
									this.itemSelected);

							return itemView;
						},

						itemSelected : function(view) {
							info("PointListView : [ENTER] : itemSelected");
							this.selectedItem = view;
							this.deselectAll();
							view.states.set("selected", true);
						},

						deselectAll : function() {
							info("PointListView : [ENTER] : deselectAll");
							for ( var i = 0; i < this.itemViewArray.length; i++) {

								this.itemViewArray[i].states.set("selected",
										false);
							}
						},

						removeOldItemView : function() {
							info("PointListView : [ENTER] : removeOldItemView");
							for ( var i = 0; i < this.itemViewArray.length; i++) {
								this.stopListening(this.itemViewArray[i]);
								this.itemViewArray[i].remove();
							}
							this.itemViewArray = new Array();
						},

						remove : function() {
							info("PointListView : [ENTER] : remove");
							Backbone.View.prototype.remove.call(this);
							this.removeOldItemView();
						},

						empty : function() {
							info("PointListView : [ENTER] : empty");
							Backbone.View.prototype.empty.call(this);
							this.removeOldItemView();
						},

						modifierElem : function() {
							info("PointListView : [ENTER] : modifierElem");
							if (this.selectedItem) {
								this.renderPoint(this.selectedItem.model);
							}
						},

						supprimerElem : function() {
							info("PointListView : [ENTER] : supprimerElem");
							if (this.selectedItem) {
								this.collection.remove(this.selectedItem);
								this.selectedItem = this.collection.at(0);
							}
						},

						newPoint : function() {
							var point = new Point();

							this.renderPoint(point);

							this.listenTo(this.views.pointView, "modelOk",
									this.addPointToCollection);
						},

						addPointToCollection : function(point) {
							this.collection.push(point);
							
						},

						hidePoint : function() {
							this.removeView(this.views.pointView);
						},

						renderPoint : function(point) {
							this.removeView(this.views.pointView);

							this.views.pointView = new PointView({
								model : point
							});

							this.$("#vue-point").html(this.views.pointView.$el);
							this.views.pointView.render();

							this.listenTo(this.views.pointView, "modelOk",
									this.hidePoint);

						},
						removeView : function(view) {
							if (view) {
								this.stopListening(view);
								view.undelegateEvents();
								view.remove();
							}
						},

					});

			return PointListView;
		});
