angular
	.module('calcApp',[])
	.controller('calculadoraController', function($scope){
	});
angular.module('calcApp')
	.directive('calc', function(){
		return {
			restrict:'AE',
			templateUrl:'./calculadora-parcial.html',
			link:function postLink($scope, element, attrs){
				console.log(element,attrs);
				$scope.resultado='';
				$scope.tecla=function(t){
					if(t==='=')
					{
						$scope.calcular();
					}else if(t==='C')
					{							
						$scope.resultado='';
					}else
					{
						$scope.resultado+=t;
					}
				}
				$scope.calcular=function(){
					var res=eval($scope.resultado);
					$scope.resultado=res;
				}
			}
		};
	});

