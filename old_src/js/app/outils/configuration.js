define(["backbone"], function(Backbone) {
	var Configuration = Backbone.Model.extend({
		
		defaults: {
		    "defaultLogLevel": 0,
		    "navbar": {
		        "item1": {
		            "id": "idFigure",
		            "items": [
		                "idSelect",
		                "idRotation",
		                "idInformation",
		                "idSave"
		            ],
		            "visibiliteEtape": [
		                "2"
		            ]
		        }
		    },
		    drawingColors:{
		    	figure :"#800000",
		    	axes : "#000000",
		    	quadrillages : "#3C3C3C"
			},
			structure:{
				minEcartDirect:0.40,
				maxEcartDirect:0.55,
				minEcartIndirect:0.70,
				maxEcartIndirect:0.85,
				bordMinDirect:0.00,
				bordMaxDirect:0.10,
				bordMinIndirect:0.0,
				bordMaxIndirect:0.1,
				
			}
		}
	});
		
	return Configuration;
});