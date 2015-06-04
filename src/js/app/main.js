require(["app/controller/mainController", "app/outils/constantes", "app/outils/logger"],function(MainController, constantes, Logger){
		
		Logger.init(constantes.defaultLogLevel);
	
		var mainController = new MainController({
			el: "body"
		});
		
		mainController.start();
});
