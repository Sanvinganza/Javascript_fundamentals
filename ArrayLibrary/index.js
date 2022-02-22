import { myFilter } from "./filter";
import { myMap } from "./map";
import { myReduce } from "./reduce";
import { mySkip } from "./skip";
import { myTake } from "./take";
import { myForEach } from "./foreach";

export function ARRAY_LIB() {
  this._array;
  var self = this;

  this.filter = function (array, callback) {
    if (self._array) {
      self._array = myFilter(self._array, array);
      return this;
    }

    return myFilter(array, callback);
  };

  this.map = function (array, callback) {
    if (self._array) {
      self._array = myMap(self._array, array);
      return this;
    }

    return myMap(array, callback);
  };

  this.reduce = function (array, callback, initialValue) {
    if (self._array) {
      self._array = myReduce(self._array, array, callback);
      return this;
    }

    return myReduce(array, callback, initialValue);
  };

  this.take = function (array, n) {
    if (self._array) {
      self._array = myTake(self._array, array);
      return this;
    }

    return myTake(array, n);
  };

  this.skip = function (array, n) {
    if (self._array) {
      self._array = mySkip(self._array, array);
      return this;
    }

    return mySkip(array, n);
  };

  this.foreach = function (array, callback) {
    if (self._array) {
      self._array = myForEach(self._array, array);
      return this;
    }

    myForEach(array, callback);
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