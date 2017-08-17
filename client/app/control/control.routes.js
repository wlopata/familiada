'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('control', {
      url: '/:gameId/control',
      template: '<control></control>'
    });
}
