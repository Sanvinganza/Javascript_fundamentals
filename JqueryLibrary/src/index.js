import { addClass } from "./metods/addClass.js";
import { removeClass } from "./metods/removeClass.js";

import './index.css';

export const $ = function (tag) {
  let pointTag = document.querySelectorAll(tag);
  return new myJquery(pointTag);
};

function myJquery(pointTag) {
  
  this.addClass = (tag) => {
    addClass(pointTag, tag);
    return this;
  };

  this.removeClass = (tag) => {
    removeClass(pointTag, tag);
    return this;
  };
}

$("#container .container-inner .test")
.addClass("color-green")
.removeClass("color-green")