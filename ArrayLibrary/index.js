import { myFilter } from "./filter";

export function ARRAY_LIB(array) {
    this.filter = (array, callback) => {
      return myFilter(array, callback);
    };
}