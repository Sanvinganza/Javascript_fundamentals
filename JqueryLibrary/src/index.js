import { addClass } from "./methods/addClass.js";
import { removeClass } from "./methods/removeClass.js";
import { text } from "./methods/text.js";
import { attr } from "./methods/attr.js";

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

  this.text = () => {
    return text(pointTag);
  };

  this.attr = (attrName) => {
    return attr(pointTag, attrName);
  }
}

// $("#container .container-inner .test")
// .addClass("color-green")

// $("#container .container-inner .test")
// .removeClass("color-green")

console.log($(".container-inner")
.text())
