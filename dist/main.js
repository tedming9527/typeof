'use strict';

function miniTypeof(val) {
    if (val === null) {
        return 'null';
    }
    return Object.prototype.toString.call(val);
}

exports.miniTypeof = miniTypeof;
