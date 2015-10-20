function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})	
		.when('/profil', {
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})	
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute', 'ngMessages'])
    .config(config)
    .controller('loginController', loginController)
    .controller('emailController', emailController)
    .controller('homeController', homeController)
    .controller('formulaireController', formulaireController)
    .controller('profilController', profilController)
    .service('profilService', profilService)
    .service('loginService', loginService)
    .service('formulaireService', formulaireService)
    .service('emailService', emailService)
    /*.factory('', )*/
    .run(run);
