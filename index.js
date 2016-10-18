"use strict"

const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();

function eventable(target) {

    let target_events = {};

    target.prototype.on = function(type, callback) {
        target_events[type] = callback;

        emitter.on(type, callback);
    }

    target.prototype.emit = emitter.emit.bind(emitter);

    let _componentWillUnmount = target.prototype.componentWillUnmount;

    target.prototype.componentWillUnmount = function() {

        if(_componentWillUnmount) _componentWillUnmount.call(target);

        // remove listeners
        for(let type in target_events) {
            emitter.removeListener(type, target_events[type]);
        }
    }

    return target;
}

module.exports = eventable;
