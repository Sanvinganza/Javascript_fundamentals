import { addClass } from "./methods/addClass.js";
import { removeClass } from "./methods/removeClass.js";
import { text } from "./methods/text.js";
import { attr } from "./methods/attr.js";

import './index.css';
import { append } from "./methods/append.js";
import { remove } from "./methods/remove.js";

export const $ = function (tag) {
  return new myJquery(document.querySelectorAll(tag));
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

  this.attr = (attrName, attrValue) => {
    return attr(pointTag, attrName, attrValue);
  }

  this.append = (content) => {
    return append(pointTag, content);
  }

  this.remove = () => {
    return remove(pointTag);
  }
}

// $("#container .container-inner .test")
// .addClass("color-green")

// $("#container .container-inner .test")
// .removeClass("color-green")

//return undefiend, should string
// console.log($(".test")
// .attr('title', 'new title'))

$('.test').append('<h2>new content</h2>');

$('h2').remove();
