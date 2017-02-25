import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  questions = [
    [ 
      // 'Na jakich imprezach Kwaq ściągnął spodnie?',
      ['wesele marebuszy', 23],
      ['koncenrt strachów', 18],
      ['wesele miłki i m.', 13],
      ['wesele pędzipioł', 7],
      ['u gruszki', 5],
      ['koncert sławomira', 2]
    ],
    [
      // 'Więcej niż jedna bania'
      ['kolejka', 23],
      ['lorneta', 18],
      ['flaszka/półlitry', 13],
      ['lama', 7],
      ['owca', 5],
      ['dwie banie', 4]
    ],
    [
      // 'Gdzie zasypia Kwaq?',
      ['w łóżku', 23],
      ['w mpk', 18],
      ['w kinie', 13],
      ['na imprezie', 7],
      ['wszędzie', 5],
    ],
    [
      // 'W jakich miejscach Kwaku rozwalił sobie ryj?',
      ['przed domówką', 23],
      ['na starowiślnej', 18],
      ['w łodzi', 13],
      ['w bosutowie', 8]
    ],
    [
      // 'Dlaczego nauczyciele mają za dobrze?','
      ['urlop', 23],
      ['ferie', 18],
      ['wakacje', 13],
      ['dzień nauczyciela', 11],
      ['zarobki', 7],
      ['dziewczynki', 5],
      ['studniówka', 5]
    ],
    [
      // 'W co przebrali się goście na poprzednich urodzinach Kwaka?',
      ['banan', 23],
      ['smok', 18],
      ['kot', 13],
      ['za nic', 8]
    ],
    [
      // 'Jaką piosenkę dobrze jest zaśpiewać, gdy jest się pijanym?',
      ['amour to\'yousfds', 23],
      ['oo o o o, kończy:', 18],
      ['chryzantemy', 13],
      ['o mój rozmarynie', 8]
    ]
  ];
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
      '   X '
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
      ' XXX ',
      'X   X',
      'X    ',
      'X    ',
      'X    ',
      'X   X',
      ' XXX '
    ],
    ć: [
      '   X ',
      '  X  ',
      ' XXX ',
      'X    ',
      'X    ',
      'X    ',
      ' XXX '
    ],
    d: [
      'XXXX ',
      ' X  X',
      ' X  X',
      ' X  X',
      ' X  X',
      ' X  X',
      'XXXX '
    ],
    e: [
      'XXXXX',
      'X    ',
      'X    ',
      'XXXX ',
      'X    ',
      'X    ',
      'XXXXX'
    ],
    ę: [
      'XXXXX',
      'X    ',
      'X    ',
      'XXXX ',
      'X    ',
      'XXXXX',
      '   X '
    ],
    f: [
      'XXXXX',
      'X    ',
      'X    ',
      'XXXX ',
      'X    ',
      'X    ',
      'X    '
    ],
    g: [
      ' XXXX',
      'X    ',
      'X    ',
      'X  XX',
      'X   X',
      'X   X',
      ' XXX '
    ],
    h: [
      'X   X',
      'X   X',
      'X   X',
      'XXXXX',
      'X   X',
      'X   X',
      'X   X'
    ],
    i: [
      ' XXX ',
      '  X  ',
      '  X  ',
      '  X  ',
      '  X  ',
      '  X  ',
      ' XXX '
    ],
    j: [
      '    X',
      '    X',
      '    X',
      '    X',
      '    X',
      'X   X',
      ' XXX '
    ],
    k: [
      'X   X',
      'X  X ',
      'X X  ',
      'XX   ',
      'X X  ',
      'X  X ',
      'X   X'
    ],
    l: [
      'X    ',
      'X    ',
      'X    ',
      'X    ',
      'X    ',
      'X    ',
      'XXXXX'
    ],
    ł: [
      ' X   ',
      ' X   ',
      ' XX  ',
      ' X   ',
      'XX   ',
      ' X   ',
      ' XXXX'
    ],
    m: [
      'X   X',
      'XX XX',
      'X X X',
      'X X X',
      'X   X',
      'X   X',
      'X   X'
    ],
    n: [
      'X   X',
      'X   X',
      'XX  X',
      'X X X',
      'X  XX',
      'X   X',
      'X   X'
    ],
    ń: [
      '   X ',
      'X X X',
      'X   X',
      'XX  X',
      'X X X',
      'X  XX',
      'X   X'
    ],
    o: [
      ' XXX ',
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      ' XXX '
    ],
    ó: [
      '   X ',
      '  X  ',
      ' XXX ',
      'X   X',
      'X   X',
      'X   X',
      ' XXX '
    ],
    p: [
      'XXXX ',
      'X   X',
      'X   X',
      'XXXX ',
      'X    ',
      'X    ',
      'X    '
    ],
    r: [
      'XXXX ',
      'X   X',
      'X   X',
      'XXXX ',
      'X X  ',
      'X  X ',
      'X   X'
    ],
    s: [
      ' XXX ',
      'X   X',
      'X    ',
      ' XXX ',
      '    X',
      'X   X',
      ' XXX '
    ],
    ś: [
      '   X ',
      '  X  ',
      ' XXX ',
      'X    ',
      ' XXX ',
      '    X',
      'XXXX '
    ],
    t: [
      'XXXXX',
      '  X  ',
      '  X  ',
      '  X  ',
      '  X  ',
      '  X  ',
      '  X  '
    ],
    u: [
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      ' XXX '
    ],
    w: [
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      'X X X',
      'X X X',
      ' X X '
    ],
    y: [
      'X   X',
      'X   X',
      ' X X ',
      '  X  ',
      '  X  ',
      '  X  ',
      '  X  '
    ],
    z: [
      'XXXXZ',
      '    X',
      '   X ',
      '  X  ',
      ' X   ',
      'X    ',
      'XXXXZ'
    ],
    ż: [
      'XXXXZ',
      '    X',
      '   X ',
      'XXXXX',
      ' X   ',
      'X    ',
      'XXXXZ'
    ],
    ź: [
      'XXXXX',
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      'X   X',
      'XXXXX'
    ],
    0: [
      ' XXX ',
      'X   X',
      'X  XX',
      'X X X',
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
    ' ': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     '
    ],
    ',': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      ' X   ',
      'X    '
    ],
    '.': [
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
      'X    '
    ],
    '\'': [
      ' X   ',
      'X    ',
      '     ',
      '     ',
      '     ',
      '     ',
      '     '
    ],
    ':': [
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
    '/': [
      '   XX',
      '   XX',
      '  XX ',
      ' XX  ',
      ' XX  ',
      'XX   ',
      'XX   '
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
    ],
    'X': [
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX'
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

  _clearAll() {
    for (var r = 0; r < 10; r++) {
      this.setSubstr(r, 0, ' '.repeat(30));
    }
  }

  newQuestion(answerCnt) {
    this._clearAll();
    for (var ans = 1; ans <= answerCnt; ans++) {
      this.setSubstr(ans, 4, ans + ' ' + ':'.repeat(17) + ' __');
    }
    this.sendDisplay();
  }

  answer(idx, ans, pts) {
    this.setSubstr(idx + 1, 6, ans + ' '.repeat(20 - (ans + pts).length) + pts);
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
