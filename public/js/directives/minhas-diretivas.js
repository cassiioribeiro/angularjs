angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.transclude = true;
        ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E"; //E = elemento
        ddo.scope = {
            nome: '@', //@ = pega a string
            acao: '&' //& = executa uma expressao no contexto de um controller
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus', function(){

        var ddo = {}

        ddo.restrict = "A"; //A = atributo
        
        /*
        ddo.scope = {
            focado: '=' //permite que o controller e a diretiva receba qlq alteracao que foi feita em qlq um dos dois, comunicação bidirecional     
        }; 
        */

        ddo.link = function(scope, element){
            scope.$on('fotoCadastrada', function(){
                element[0].focus();
            });
        }

        return ddo;
    });
