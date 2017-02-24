/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import DisplayEvents from './display.events';

export function register(socket) {
  var listener = createListener(`display:save`, socket);
  DisplayEvents.on('save', listener);
  socket.on('disconnect', removeListener('save', listener));
}


function createListener(event, socket) {
  return function(doc) {
    socket.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return function() {
    DisplayEvents.removeListener(event, listener);
  };
}
