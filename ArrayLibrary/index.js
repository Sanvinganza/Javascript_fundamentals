import { myFilter } from "./filter";
import { myMap } from "./map";

export function ARRAY_LIB(array) {
  this.filter = function (callback) {
    return myFilter(array, callback);
  };

  this.map = function (callback) {
    return myMap(array, callback);
  };
}
