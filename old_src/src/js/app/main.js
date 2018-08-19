require(["app/controller/mainController", "app/outils/configuration", "app/outils/logger","app/outils/handlebarsHelpers"],function(MainController, Configuration, Logger, HandlebarsHelpers){
	
		var config = new Configuration()
	
		Logger.init(config.get("defaultLogLevel"));
	
		var mainController = new MainController({
			el: "body"
		});
		
		mainController.start();
});
