'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('control', {
      url: '/control',
      template: '<control></control>'
    });
}
