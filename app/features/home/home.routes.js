routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state({
			name: "home",
			url: '/home',
			component: "home"
		});
}
