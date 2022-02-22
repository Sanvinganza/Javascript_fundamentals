import { myFilter } from "./filter";
import { myMap } from "./map";
import { myReduce } from "./reduce";
import { mySkip } from "./skip";
import { myTake } from "./take";
import { myForEach } from "./foreach";

export function ARRAY_LIB() {
  this._array;
  var self = this;

  function callMethod(args, fn) {
    if (self._array) {
      self._array = fn.apply(null, [self._array].concat(args));
      return self;
    }

    return fn.apply(null, args);
  }

  this.reduce = function (array, callback, initialValue) {
    return callMethod([array, callback, initialValue], myReduce);
  };

  this.filter = function (array, callback) {
    return callMethod([array, callback], myFilter);
  };

  this.map = function (array, callback) {
    return callMethod([array, callback], myMap);
  };

  this.take = function (array, n) {
    return callMethod([array, n], myTake);
  };

  this.skip = function (array, n) {
    return callMethod([array, n], mySkip);
  };

  this.foreach = function (array, callback) {
    return callMethod([array, callback], myForEach);
  };

  this.chain = function (array) {
    self._array = array;
    return this;
  };

  this.value = function () {
    const _ = self._array;
    delete self._array;
    return _;
  };
}
