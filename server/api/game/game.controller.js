'use strict';

import jsonpatch from 'fast-json-patch';
import GameEvents from './game.events';

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

function newGame() {
  return {
    gameHistory: [{
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
    }]
  }
}

var games = {}

export function get(req, res) {
  var gameId = req.params.gameId;
  if (!(gameId in games)) {
    games[gameId] = newGame();
  }
  res.send(games[gameId].gameHistory.slice(-1)[0]);
}

export function post(req, res) {
  var gameId = req.params.gameId;
  var gameHistory = games[gameId].gameHistory;
  gameHistory.push(req.body);
  if (gameHistory.length > 20) {
    gameHistory.shift();
  }
  res.end('it worked!');
  GameEvents.emit('save', req.body);
}

export function undo(req, res) {
  var gameId = req.params.gameId;
  var gameHistory = games[gameId].gameHistory;
  if (gameHistory.length > 1) {
    gameHistory.pop();
    gameHistory[gameHistory.length - 1].soundToPlay = '';
  }
  res.end('it worked!');
  GameEvents.emit('save', gameHistory.slice(-1)[0]);
}
