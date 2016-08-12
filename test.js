'use strict'

process.nextTick = require('process.nexttick')

var test     = require('tap'),
    Plugin   = require('./'),
    Handover = require('hand-over'),
    p        = new Plugin(/* todo */),
    n        = new Handover().use(p)

test.pass('not implemented yet')
