import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  display = [
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
  ];

  pxMap = {
    a: [
      ' XXX ',
      'X   X',
      'X   X',
      'X   X',
      'XXXXX',
      'X   X',
      'X   X'
    ],
    ą: [
      ' XXX ',
      'X   X',
      'X   X',
      'X   X',
      'XXXXX',
      'X   X',
      'X   X'
    ],
    b: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    c: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ć: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    d: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    e: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ę: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    f: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    g: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    h: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    i: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    j: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    k: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    l: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ł: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    m: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    n: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ń: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    o: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ó: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    p: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    r: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    s: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ś: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    t: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    u: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    w: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    x: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    y: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    z: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ż: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    ź: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' XXX ',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    0: [
      ' XXX ',
      'X   X',
      'X  XX',
      'X X X ',
      'XX  X',
      'X   X',
      ' XXX '
    ],
    1: [
      '  X  ',
      ' XX  ',
      'X X  ',
      '  X  ',
      '  X  ',
      '  X  ',
      'XXXXX'
    ],
    2: [
      ' XXX ',
      'X   X',
      '    X',
      '   X ',
      '  X  ',
      ' X   ',
      'XXXXX'
    ],
    3: [
      ' XXX ',
      'X   X',
      '    X',
      ' XXX ',
      '    X',
      'X   X',
      ' XXX '
    ],
    4: [
      '   X ',
      '  XX ',
      ' X X ',
      'X  X ',
      'XXXXX',
      '   X ',
      '   X '
    ],
    5: [
      'XXXXX',
      'X    ',
      'XXXX ',
      '    X',
      '    X',
      'X   X',
      ' XXX '
    ],
    6: [
      '  XX ',
      ' X   ',
      'X    ',
      'XXXX ',
      'X   X',
      'X   X',
      ' XXX '
    ],
    7: [
      'XXXXX',
      '    X',
      '   X ',
      '  X  ',
      ' X   ',
      ' X   ',
      ' X   '
    ],
    8: [
      ' XXX ',
      'X   X',
      'X   X',
      ' XXX ',
      'X   X',
      'X   X',
      ' XXX '
    ],
    9: [
      ' XXX ',
      'X   X',
      'X   X',
      ' XXXX',
      '    X',
      '   X ',
      ' XX  '
    ],
    '.': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      'X X X'
    ],
    '_': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      'XXXXX',
      'XXXXX'
    ],
    ' ': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     '
    ],
    A: [
      '     ',
      'XX   ',
      'XXX  ',
      'XXXX ',
      ' XXXX',
      '  XXX',
      '   XX'
    ],
    'B': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      'X   X',
      'XX XX'
    ],
    'C': [
      '     ',
      '   XX',
      '  XXX',
      ' XXXX',
      'XXXX ',
      'XXX  ',
      'XX   '
    ],
    'D': [
      'XXXXX',
      'XXXXX',
      ' XXX ',
      '  X  ',
      ' XXX ',
      'XXXXX',
      'XXXXX'
    ],
    'E': [
      '   XX',
      '  XXX',
      ' XXXX',
      'XXXX ',
      'XXX  ',
      'XX   ',
      '     '
    ],
    'F': [
      'XX XX',
      'X   X',
      '     ',
      '     ',
      '     ',
      '     ',
      '     '
    ],
    'G': [
      'XX   ',
      'XXX  ',
      'XXXX ',
      ' XXXX',
      '  XXX',
      '   XX',
      '     '
    ],
    'J': [
      'X    ',
      'XX   ',
      'XXX  ',
      'XXXX ',
      'XXXXX',
      'XXXXX',
      'XXXXX'
    ],
    'K': [
      '    X',
      '   XX',
      '  XXX',
      ' XXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX'
    ],
    'L': [
      'XXXXX',
      'XXXXX',
      'XXXXX',
      ' XXXX',
      '  XXX',
      '   XX',
      '    X'
    ],
    'M': [
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXX ',
      'XXX  ',
      'XX   ',
      'X    '
    ]
  };

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('display');
    });
  }

  $onInit() {
    this.$http.get('/api/display')
      .then(response => {
        this.display = response.data;
        this.socket.syncUpdates('display', this.display);
      });
  }

  sendDisplay() {
    this.$http.post('/api/display', this.display);
  }

  setSubstr(row, col, str) {
    this.display[row] = this.display[row].substring(0, col) + str + this.display[row].substring(col + str.length, 30);
  }

  _X(row, col) {
    this.setSubstr(row, col, 'ABC');
    this.setSubstr(row + 1, col, ' D ');
    this.setSubstr(row + 2, col, 'EFG');
  }

  _clearLeft() {
    for (var r = 0; r < 10; r++) {
      this.setSubstr(r, 0, '    ');
    }
  }

  _clearRight() {
    for (var r = 0; r < 10; r++) {
      this.setSubstr(r, 26, '    ');
    }
  }

  clearLeft() {
    this._clearLeft();
    this.sendDisplay();
  }

  clearRight() {
    this._clearRight();
    this.sendDisplay();
  }

  clearBoth() {
    this._clearLeft();
    this._clearRight();
    this.sendDisplay();
  }

  _bigX(row, col) {
    this.setSubstr(row, col, 'J K');
    this.setSubstr(row + 1, col, 'L M');
    this.setSubstr(row + 2, col, ' D ');
    this.setSubstr(row + 3, col, 'K J');
    this.setSubstr(row + 4, col, 'M L');
  }

  leftBigX() {
    this._clearLeft();
    this._bigX(3, 0);
    this.sendDisplay();
  }

  rightBigX() {
    this._clearRight();
    this._bigX(3, 27);
    this.sendDisplay();
  }

  leftX() {
    this._clearLeft();
    this._X(7, 0);
    this.sendDisplay();
  }

  leftXX() {
    this._clearLeft();
    this._X(7, 0);
    this._X(4, 0);
    this.sendDisplay();
  }

  leftXXX() {
    this._clearLeft();
    this._X(7, 0);
    this._X(4, 0);
    this._X(1, 0);
    this.sendDisplay();
  }

  rightX() {
    this._clearRight();
    this._X(7, 27);
    this.sendDisplay();
  }

  rightXX() {
    this._clearRight();
    this._X(7, 27);
    this._X(4, 27);
    this.sendDisplay();
  }

  rightXXX() {
    this._clearRight();
    this._X(7, 27);
    this._X(4, 27);
    this._X(1, 27);
    this.sendDisplay();
  }

  _clearMiddle() {
    for (var r = 0; r < 10; r++) {
      this.setSubstr(r, 4, ' '.repeat(22));
    }
  }

  newQuestion(answerCnt) {
    this._clearMiddle();
    for (var ans = 1; ans <= answerCnt; ans++) {
      this.setSubstr(ans, 4, ans + ' ' + '.'.repeat(17) + ' __');
    }
    this.sendDisplay();
  }
}

export default angular.module('sklepixApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
