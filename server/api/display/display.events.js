/**
 * Display model events
 */

'use strict';

import {EventEmitter} from 'events';
var DisplayEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DisplayEvents.setMaxListeners(0);

export default DisplayEvents;
