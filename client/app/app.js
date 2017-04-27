'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import main from './main/main.component';
import constants from './app.constants';
import socket from '../components/socket/socket.service';
import control from './control/control.component';

import './app.css';

angular.module('familiadaApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, main, constants, socket, control
])
  .config(routeConfig)
  .run(function($rootScope, $location) {
    'ngInject';
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['familiadaApp'], {
      strictDi: true
    });
  });
