'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/:gameId',
    template: '<main></main>'
  });
}
