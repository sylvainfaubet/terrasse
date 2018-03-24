require('angular');
import uirouter from '@uirouter/angularjs';

import routing from './app.config';

import home from './features/home/home.module';
/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
	.element(document)
	.ready(function () {
		let appName = 'terrasse';

		let body = document.getElementsByTagName("body")[0];
		let app = angular.module(appName, [uirouter, home])
			.config(routing);

		angular.bootstrap(body, [appName])

	});
