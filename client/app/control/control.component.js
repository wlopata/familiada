'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './control.routes';
import { MainController } from '../main/main.component';

export class ControlComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('familiadaApp.control', [uiRouter])
  .config(routes)
  .component('control', {
    template: require('./control.html'),
    controller: MainController
  })
  .name;
