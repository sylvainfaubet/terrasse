import homeComponent from './homeComponent';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state({
			name: "home",
			url: '/',
			component: homeComponent
		});
}
