import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = '';
  matchingProducts = [
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 42
    },
    {
      name: 'Masło Extra Nieświeże Mix 2',
      price: 5.45,
      id: 46
    },
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 49
    },
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 142
    },
    {
      name: 'Masło Extra',
      price: 12.99,
      id: 242
    },
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 542
    },
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 842
    },
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 12342
    },
    {
      name: 'Masło Extra',
      price: 455.45,
      id: 42213
    },
    {
      name: 'Masło Extra',
      price: 5.45,
      id: 42124
    },
  ];

  /*@ngInject*/
  constructor($http, $scope, socket, ngCart) {
    this.$http = $http;
    this.socket = socket;
    this.ngCart = ngCart;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }

  cartIncrement(product) {
    console.log('increment ' + product);
    //this.ngCart.addItem('asdsa', 'adsadsd', 4.99, 2, {});
  }

  cartDecrement(product) {
    console.log('decrement ' + product);
  }
}

export default angular.module('sklepixApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
