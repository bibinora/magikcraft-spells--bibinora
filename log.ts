"use strict";

var log = function log(x) {
  console.log(x);
};

var ary = [10, 23, 4, 0, 77];

var a = ary.fill(null); // [null, null, null, null, null]

var ary = [10, 23, 4, 0, 77];

var b = ary.fill(null, 3); // [10, 23, 4, null, null]

log(b);