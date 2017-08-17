/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import GameEvents from './game.events';

export function register(socket) {
  var listener = createListener(`game:save`, socket);
  GameEvents.on('save', listener);
  socket.on('disconnect', removeListener('save', listener));
}


function createListener(event, socket) {
  return function(doc) {
    socket.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return function() {
    GameEvents.removeListener(event, listener);
  };
}
