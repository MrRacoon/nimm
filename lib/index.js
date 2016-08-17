'use strict'

var repl = require('repl')
var Immutable = require('immutable');

var r = repl.start(' λ > ');

Object.defineProperty(r.context, '_', {
    get: function () { return Immutable; },
    set: function () { return; }
});
