import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './start.routes';

export class StartController {
  /*@ngInject*/
  gameId = 'unassigned';

  foo() {
    return 'dasdasdsa';
  }

  constructor($scope) {
    this.gameId = '' + Date.now();
  }
}

export default angular.module('familiadaApp.start', [uiRouter])
  .config(routing)
  .component('start', {
    template: require('./start.html'),
    controller: StartController
  })
  .name;
