import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';

export default angular.module('app.home', [uirouter])
	.config(routing)
	.name;
