'use strict';

import jsonpatch from 'fast-json-patch';
import DisplayEvents from './display.events';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

var displayHistory = [{
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
}];

/*var display = [
  'a ą b c ć d e ę f g h i j k l ',
  'ł m n ń o ó p r s ś t u w y z ',
  'z ż ź _                       ',
  '0 1 2 3 4 5 6 7 8 9           ',
  'a ą b c ć d e ę f g h i j k l ',
  'ł m n ń o ó p r s ś t u w y z ',
  'z ż ź _                       ',
  '                              ',
  'a ą b c ć d e ę f g h i j k l ',
  'ł m n ń o ó p r s ś t u w y z ',
];*/

export function get(req, res) {
  res.send(displayHistory.slice(-1)[0]);
}

export function post(req, res) {
  console.log('New display!')
  displayHistory.push(req.body);
  if (displayHistory.length > 20) {
    displayHistory.shift();
  }
  res.end('it worked!');
  DisplayEvents.emit('save', req.body);
}

export function undo(req, res) {
  console.log('Undo :O')
  if (displayHistory.length > 0) {
    displayHistory.pop();
  }
  res.end('it worked!');
  DisplayEvents.emit('save', displayHistory.slice(-1)[0]);
}
