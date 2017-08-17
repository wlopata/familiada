'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/:gameId', controller.get);
router.post('/:gameId', controller.post);
router.delete('/:gameId', controller.undo);

module.exports = router;
