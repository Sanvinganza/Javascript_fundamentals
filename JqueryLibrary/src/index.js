import { myAddClass } from "./metods/addClass.js";
import './index.css';

export const $ = function (tag) {
  let pointTag = document.querySelectorAll(tag);
  return new myJquery(pointTag);
};

function myJquery(pointTag) {
  
  this.addClass = (tag) => {
    myAddClass(pointTag, tag);
    return this;
  };

  this.append = (tag) => {
    
    return this
  };
}

$("#container .container-inner .test").addClass("color-green");
