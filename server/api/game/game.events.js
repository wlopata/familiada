/**
 * Game model events
 */

'use strict';

import {EventEmitter} from 'events';
var GameEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GameEvents.setMaxListeners(0);

export default GameEvents;
