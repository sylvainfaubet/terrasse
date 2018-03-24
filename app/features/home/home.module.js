import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import homeComponent from './homeComponent';

export default angular.module('home', [])
	.component('home', homeComponent)
	.config(routing)
	.name;
