'use strict';

import * as _ from 'lodash';
import angular from 'angular';
import io from 'socket.io-client';

function Socket(socketFactory) {
  'ngInject';
  // socket.io now auto-configures its connection when we ommit a connection url

  var ioSocket = io('', {
    // Send auth token on connection, you will need to DI the Auth service above
    // 'query': 'token=' + Auth.getToken()
    path: '/socket.io-client'
  });

  var socket = socketFactory({
    ioSocket
  });

  return {
    socket,
    /**
     * Register listeners to sync an array with updates on a model
     *
     * Takes the array we want to sync, the model name that socket updates are sent from,
     * and an optional callback function after new items are updated.
     *
     * @param {String} modelName
     * @param {Array} array
     * @param {Function} cb
     */
    syncUpdates(modelName, array, cb) {
      cb = cb || angular.noop;

      /**
       * Syncs item creation/updates on 'model:save'
       */
      var playedSoundIds = {};
      socket.on(`${modelName}:save`, function(item) {
        /*
        var oldItem = _.find(array, {
          _id: item._id
        });
        var index = array.indexOf(oldItem);
        var event = 'created';

        // replace oldItem if it exists
        // otherwise just add item to the collection
        if(oldItem) {
          array.splice(index, 1, item);
          event = 'updated';
        } else {
          array.push(item);
        }

        cb(event, item, array);*/
        var soundMap = {
          'wrong_answer': '/assets/sounds/bledna_odpowiedz.wav',
          'correct_answer': '/assets/sounds/poprawna_odpowiedz.wav',
          'round_starts_or_ends': '/assets/sounds/przerywnik_przed_i_po_rundzie.wav',
          'intro': '/assets/sounds/intro.wav',
          'final_captions': '/assets/sounds/napisy_koncowe.wav',
          'pre_final': '/assets/sounds/przerywnik_przed_finalem.wav',
          'correct_answer_final': '/assets/sounds/poprawna_odpowiedz_final.wav',
          'final_answer_suspence': '/assets/sounds/dzwoneczek_final.wav',
          'same_answer': '/assets/sounds/bledna_odpowiedz_final.wav',
        };
        if (array.soundId != item.soundId && item.soundToPlay in soundMap) {
          if (item.soundId in playedSoundIds) {
            console.log('duplicate sound detected!');
          } else {
            playedSoundIds[item.soundId] = true;
            console.log('playing sound: ' + item.soundToPlay + ' - ' + item.soundId);
            var audio = new Audio(soundMap[item.soundToPlay]);
            audio.play();
          }
        }
        Object.assign(array, item);
        cb(event, item, array);
      });

      socket.on(`${modelName}:set`, function(item) {
        Object.assign(array, item)

        cb(event, item, array);
      });

      /**
       * Syncs removed items on 'model:remove'
       */
      socket.on(`${modelName}:remove`, function(item) {
        var event = 'deleted';
        _.remove(array, {
          _id: item._id
        });
        cb(event, item, array);
      });
    },

    /**
     * Removes listeners for a models updates on the socket
     *
     * @param modelName
     */
    unsyncUpdates(modelName) {
      socket.removeAllListeners(`${modelName}:set`);
      socket.removeAllListeners(`${modelName}:save`);
      socket.removeAllListeners(`${modelName}:remove`);
    }
  };
}

export default angular.module('familiadaApp.socket', [])
  .factory('socket', Socket)
  .name;
