define([ "backbone", "handlebars", "text!app/template/choixFigureView.html", "app/view/figureItemView" ], function(
		Backbone, Handlebars, tpl, FigureItemView) {
		
	var hbTemplate = Handlebars.compile(tpl);
	
	var ChoixFigureView = Backbone.View.extend({
		
		template: hbTemplate,
		
		events : {
			"click #newFigure" : "ajouterFigure",
			"click #editFigure" : "editerFigure"
		},
		
		initialize : function(args){
			info("ChoixFigureView : [ENTER] : initialize");
			this.itemViewArray = new Array();
		},
		
		render : function(){
			info("ChoixFigureView : [ENTER] : render");
			
			var data = {};
			this.$el.html(this.template(data));
			
			this.renderList(this.collection);
		},
		
		renderList:function(collection){
			info("ChoixFigureView : [ENTER] : renderList");
			
			this.removeOldItemView();
			var listElem  = this.$("#figureList");
			for( var i = 0; i < collection.length; i++){
				
				var itemView = new FigureItemView({
					model : collection.models[i]
				});
				
				itemView.render();
				
				this.listenTo(itemView, "itemSelected", this.itemSelected);
				
				this.itemViewArray.push( itemView );
				
				listElem.append( itemView.$el );
				
				if(i==0){
					this.selectedItem = itemView;
				}
			}
		},
		itemSelected : function(view){
			info("ChoixFigureView : [ENTER] : itemSelected");
			this.selectedItem = view;
		},
		
		removeOldItemView : function(){
			info("ChoixFigureView : [ENTER] : removeOldItemView");
			for(var i = 0; i < this.itemViewArray.length; i++){
				this.stopListening( this.itemViewArray[i] );
				this.itemViewArray[i].remove();		
			}
			this.itemViewArray = new Array();
		},
		
		remove: function(){
			info("ChoixFigureView : [ENTER] : remove");
			this.removeOldItemView();
			Backbone.View.prototype.remove.call(this);
		},
		
		empty: function(){
			info("ChoixFigureView : [ENTER] : empty");
			Backbone.View.prototype.empty.call( this );
			this.removeOldItemView();
		},
		
		ajouterFigure : function(){
			info("ChoixFigureView : [ENTER] : ajouterFigure");
			this.trigger("ajout");
		},
		editerFigure : function(){
			info("ChoixFigureView : [ENTER] : editerFigure");
			this.trigger("edition", this.selectedItem);
		}
		
		
	});
	
	return ChoixFigureView;
});