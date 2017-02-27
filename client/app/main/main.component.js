import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  questions = [
    [
      // 'Więcej niż jedna bania'
      ['dwie banie', 25],
      ['lorneta', 16],
      ['lama', 15],
      ['owca', 12],
      ['kolejka', 8],
      ['flaszka/półlitry', 3]
    ],
    [ 
      // 'Na jakich imprezach Kwaq ściągnął spodnie?',
      ['wesele pędzipioł', 20],
      ['w kiblu', 18],
      ['wesele miłki i m.', 20],
      ['koncert strachów', 14],
      ['wesele marebuszy', 8],
      ['u gruszki', 6],
      ['koncert sławomira', 4],
    ],
    [
      // 'Dlaczego nauczyciele mają za dobrze?','
      ['nastoletnie dup:', 30],
      ['wakacje', 25],
      ['studniówka', 20],
      ['dzień nauczyciela', 11],
      ['urlop', 7],
      ['ferie', 4],
      ['zarobki', 1]
    ],
    [
      // 'Jaką piosenkę dobrze jest zaśpiewać, gdy jest się pijanym?',
      ['amour toujours', 25],
      ['szósty dzień:', 23],
      ['oo o o o, kończy:', 18],
      ['chryzantemy', 13],
      ['o mój rozmarynie', 8],
      ['bara bara bara', 3]
    ],
    [
      // 'Gdzie zasypia Kwaq?',
      ['wszędzie', 27],
      ['w kinie', 23],
      ['w mpk', 17],
      ['na imprezie', 13],
      ['w łóżku', 8]
    ],
    [
      // 'W jakich miejscach Kwaku rozwalił sobie ryj?',
      ['w łodzi',30],
      ['przed domówką', 23],
      ['na starowiślnej', 18],
      ['w bosutowie', 8]
    ],
    [
      // 'W co przebrali się goście na poprzednich urodzinach Kwaka?',
      ['banan', 23],
      ['smok', 18],
      ['kot', 13],
      ['za nic', 8]
    ],
  ];
  cleanDisplay = {
    ptsLeft: 0,
    ptsRight: 0,
    ptsInStack: 0,
    ptsMiddle: 0,
    answersRevealed: {},
    multiplier: 1,
    currentQuestionIdx: -1,
    soundToPlay: '',
    soundId: '',
    shouldBeAddingPoints: true,
    main: [
      '                              ',
      '                              ',
      'XXXKXJ X  X X X  X KXJ XXJ KXJ',
      'X  X X XGEX X X  X X X X X X X',
      'XX XXX X  X X X  X XXX X X XXX',
      'X  X X X  X X X  X X X X X X X',
      'X  X X X  X X XX X X X XXM X X',
      '                              ',
      '                              ',
      '                              ',
    ]
  };

  finalDisplay = {
    ptsLeft: 0,
    ptsRight: 0,
    ptsInStack: 0,
    ptsMiddle: 0,
    answersRevealed: {},
    multiplier: 1,
    currentQuestionIdx: -1,
    soundToPlay: 'pre_final',
    soundId: '',
    shouldBeAddingPoints: true,
    main: [
      '                              ',
      '                              ',
      '___________ YY  YY ___________',
      '___________ YY  YY ___________',
      '___________ YY  YY ___________',
      '___________ YY  YY ___________',
      '___________ YY  YY ___________',
      '                              ',
      '      suma   0                ',
      '                              ',
    ]
  };

  display = {};

  sounds = {
    'intro': '/assets/sounds/intro.wav',
    'napisy koncowe': '/assets/sounds/napisy_koncowe.wav',
    'przerywnik po 1 rundzie': '/assets/sounds/przerywnik_po_1_rundzie.wav',
    'przerywnik przed finałem': '/assets/sounds/przerywnik_przed_finalem.wav',
  };

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
    '-': [
      '     ',
      '     ',
      '     ',
      'XXXXX',
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
    ],
    'Y': [
      ' XXX ',
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX',
      'XXXXX',
      ' XXX '
    ]
  };

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    Object.assign(this.display, this.cleanDisplay);

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

  clearDisplay() {
    console.log('clear display');
    Object.assign(this.display, this.cleanDisplay);
    this.sendDisplay();
  }

  setSubstr(row, col, str) {
    this.display.main[row] =
      this.display.main[row].substring(0, col) + str + this.display.main[row].substring(col + str.length, 30);
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

  _wrongAnswerSound() {
    this.display.soundToPlay = 'wrong_answer';
    this.display.soundId = Date.now();
  }

  _correctAnswerSound() {
    this.display.soundToPlay = 'correct_answer';
    this.display.soundId = Date.now();
  }

  _correctAnswerFinalSound() {
    this.display.soundToPlay = 'correct_answer_final';
    this.display.soundId = Date.now();
  }

  _roundStartsOrEndsSound() {
    this.display.soundToPlay = 'round_starts_or_ends';
    this.display.soundId = Date.now();
  }

  playSameAnswer() {
    this.display.soundToPlay = 'same_answer';
    this.display.soundId = Date.now();
    this.sendDisplay();
  }

  playIntro() {
    this.display.soundToPlay = 'intro';
    var prev = this.display.soundId;
    this.display.soundId = Date.now();
    this.sendDisplay();
    console.log('SENDING INTRO ' + this.display.soundId, + ' prev soundId: ' + prev);
  }

  playFinalCaptions() {
    this.display.soundToPlay = 'final_captions';
    this.display.soundId = Date.now();
    this.sendDisplay();
  }

  leftBigX() {
    this._clearLeft();
    this._bigX(3, 0);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  rightBigX() {
    this._clearRight();
    this._bigX(3, 27);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  leftX() {
    this._clearLeft();
    this._X(7, 0);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  leftXX() {
    this._clearLeft();
    this._X(7, 0);
    this._X(4, 0);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  leftXXX() {
    this._clearLeft();
    this._X(7, 0);
    this._X(4, 0);
    this._X(1, 0);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  rightX() {
    this._clearRight();
    this._X(7, 27);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  rightXX() {
    this._clearRight();
    this._X(7, 27);
    this._X(4, 27);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  rightXXX() {
    this._clearRight();
    this._X(7, 27);
    this._X(4, 27);
    this._X(1, 27);
    this._wrongAnswerSound();
    this.sendDisplay();
  }

  _clearAll() {
    for (var r = 0; r < 10; r++) {
      this.setSubstr(r, 0, ' '.repeat(30));
    }
  }

  pointsInStack() {
    var pts = 0;
    var anss = Object.keys(this.display.answersRevealed);
    for (var i = 0; i < anss.length; i++) {
      pts += this.questions[this.display.currentQuestionIdx][anss[i]][1];
    }
    return pts;
  }

  _updatePtsInStack() {
    var ptsTotal = 0;
    if (this.display.shouldBeAddingPoints) {
      ptsTotal = this.pointsInStack();
    }
    this.display.ptsInStack = ptsTotal;
    this.display.ptsMiddle = this.display.multiplier * ptsTotal;
    var answerCnt = this.questions[this.display.currentQuestionIdx].length;
    this.setSubstr(answerCnt + 2, 19, 'suma ' + (ptsTotal > 9 ? '' : ' ') + ptsTotal);
  }

  leftWon() {
    this.display.shouldBeAddingPoints = false;
    this.display.ptsLeft += this.display.ptsMiddle;
    this._updatePtsInStack();
    this._roundStartsOrEndsSound();
    this.sendDisplay();
  }


  rightWon() {
    this.display.shouldBeAddingPoints = false;
    this.display.ptsRight += this.display.ptsMiddle;
    this._updatePtsInStack();
    this._roundStartsOrEndsSound();
    this.sendDisplay();
  }

  newQuestion(qIdx) {
    this._clearAll();
    this.display.answersRevealed = {};
    this.display.currentQuestionIdx = qIdx;
    this.display.shouldBeAddingPoints = true;

    var answerCnt = this.questions[qIdx].length;
    for (var ans = 1; ans <= answerCnt; ans++) {
      this.setSubstr(ans, 4, ans + ' ' + ':'.repeat(17) + ' __');
    }
    this.setSubstr(answerCnt + 2, 19, 'suma  0');
    this._roundStartsOrEndsSound();
    this.sendDisplay();
  }

  answer(aIdx, ans, pts) {
    if (this.display.currentQuestionIdx == -1) {
      console.warn('Current question is not defined!');
      return;
    }
    this.display.answersRevealed[aIdx] = true;
    this._updatePtsInStack();
    this.setSubstr(aIdx + 1, 6, ans + ' '.repeat(20 - (ans + pts).length) + pts);
    this._correctAnswerSound();
    this.sendDisplay();
  }

  startFinal() {
    Object.assign(this.display, this.finalDisplay);
    this.display.soundId = Date.now();
    this.sendDisplay();
  }

  noAnswer(id, side) {
    document.getElementsByName('ans' + side + id)[0].value = '----';
  }

  _syncFinalAnswer(id, side) {
    var ans = document.getElementsByName('ans' + side + id)[0].value.toLowerCase();
    if (side == 'L') {
      this.setSubstr(id + 1, 0, ' '.repeat(11 - ans.length) + ans);
    } else {
      this.setSubstr(id + 1, 19, ans + ' '.repeat(11 - ans.length));
    }
  }

  _syncFinalPoints(id, side) {
    var pts = Number(document.getElementsByName('pts' + side + id)[0].value);
    if (side == 'L') {
      this.setSubstr(id + 1, 12, ' '.repeat(pts > 9 ? 0 : 1) + pts);
    } else {
      this.setSubstr(id + 1, 16, ' '.repeat(pts > 9 ? 0 : 1) + pts);
    }
    this.display.ptsMiddle += pts;
    this.setSubstr(8, 6, 'suma' + ' '.repeat(4 - ('' + this.display.ptsMiddle).length) + this.display.ptsMiddle);
    return pts > 0;
  }

  syncFinalAnswer(id, side) {
    this._syncFinalAnswer(id, side);
    this.display.soundToPlay = 'final_answer_suspence';
    this.display.soundId = Date.now();
    this.sendDisplay();
  }

  syncFinalPoints(id, side) {
    if (this._syncFinalPoints(id, side)) {
      this.display.soundToPlay = 'correct_answer';
    } else {
      this.display.soundToPlay = 'wrong_answer';
    }
    this.display.soundId = Date.now();
    this.sendDisplay();
  }

  syncFinalAnswerAndPoints(id, side) {
    this._syncFinalAnswer(id, side);
    var success = this._syncFinalPoints(id, side);
    if (success) {
      this._correctAnswerFinalSound();
    } else {
      this._wrongAnswerSound();
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
