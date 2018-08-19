define([], function () {
	
	var Logger = {
			
			init:function(logLevel){
				this.setLevel(logLevel);
				window.info = this.info;
				window.debug = this.debug;
				window.error = this.error;
				window.LoggerContext = this;
			},
			
			setLevel:function(logLevel){
				window.logLevel = logLevel;
			},
			
			level:{
				debug:0,
				info:1,
				warn:2,
				error:3,
				fatal:4
			},
					
			log: function(level, message){
				if(window.logLevel <= level){
					console.log(message);
				}
			},
			
			info:function(message){
				LoggerContext.log(LoggerContext.level.info,message);
			},
			debug:function(message){
				LoggerContext.log(LoggerContext.level.debug,message);
			},
			error:function(message){
				LoggerContext.log(LoggerContext.level.error,message);
			}
			
	};	
	
	return Logger;
});