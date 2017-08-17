'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider.state('start', {
    url: '/',
    template: '<start></start>'
  });
}
