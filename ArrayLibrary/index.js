import { myFilter } from "./filter";
import { myMap } from "./map";

export function ARRAY_LIB(array) {
  this.filter = (array, callback) => {
    return myFilter(array, callback);
  };

  this.map = (callback) => {
    return myMap(array, callback);
  };
}