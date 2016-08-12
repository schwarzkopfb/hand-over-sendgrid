'use strict'

module.exports = HandoverSendgrid

var inherits = require('util').inherits,
    Plugin   = require('hand-over/plugin')

function HandoverSendgrid(opts) {
    Plugin.call(this, opts)

    // todo
}

inherits(HandoverSendgrid, Plugin)

HandoverSendgrid.prototype.name = 'sendgrid'

HandoverSendgrid.prototype.send = function (target, data, callback) {

}

HandoverSendgrid.prototype.unref = function () {
    // nothing to do
}

HandoverSendgrid.prototype.destroy = function () {
    // nothing to do
}
