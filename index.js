'use strict'

module.exports = HandoverSendgrid

var inherits = require('util').inherits,
    sendgrid = require('sendgrid'),
    helper   = sendgrid.mail,
    Plugin   = require('hand-over/plugin')

function HandoverSendgrid(opts) {
    Plugin.call(this, opts)
    this.instance = sendgrid(opts)
}

inherits(HandoverSendgrid, Plugin)

HandoverSendgrid.prototype.name = 'sendgrid'

HandoverSendgrid.prototype.send = function (target, data, callback) {
    var from    = new helper.Email(data.from),
        to      = new helper.Email(data.to),
        type    = data.contentType || data.content_type || 'text/html',
        content = new helper.Content(type, data.content || data.body),
        mail    = new helper.Mail(from, data.subject || '', to, content)

  var request = this.instance.emptyRequest({
    method: 'POST',
    path:   '/v3/mail/send',
    body:   mail.toJSON()
  })

  this.instance.API(request, function(err, res) {
    // todo: validate response
    // console.log(response.statusCode)
    // console.log(response.body)
    // console.log(response.headers)

    callback()
  })
}

HandoverSendgrid.prototype.unref = function () {
    // nothing to do
}

HandoverSendgrid.prototype.destroy = function () {
    // nothing to do
}
