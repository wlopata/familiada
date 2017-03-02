'use strict';

import angular from 'angular';

export default angular.module('familiadaApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
