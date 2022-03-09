import "./index.css";
import { addClass } from "./methods/addClass.js";
import { removeClass } from "./methods/removeClass.js";
import { text } from "./methods/text.js";
import { attr } from "./methods/attr.js";
import { append } from "./methods/append.js";
import { remove } from "./methods/remove.js";
import { children } from "./methods/children.js";
import { empty } from "./methods/empty";
import { css } from "./methods/css";

export const $ = function (tag) {
  return new myJquery(document.querySelectorAll(tag));
};

export function myJquery(pointTag) {
  let _pointTag = pointTag;

  this.addClass = (tag) => {
    addClass(_pointTag, tag);
    return this;
  };

  this.removeClass = (tag) => {
    removeClass(_pointTag, tag);
    return this;
  };

  this.text = () => {
    return text(_pointTag);
  };

  this.attr = (attrName, attrValue) => {
    return attr(_pointTag, attrName, attrValue);
  };

  this.append = (content) => {
    return append(_pointTag, content);
  };

  this.remove = () => {
    return remove(_pointTag);
  };

  this.children = (child) => {
    _pointTag = children(_pointTag, child);
    return this;
  };

  this.empty = () => {
    return empty(_pointTag);
  };

  this.css = (style, valueStyle) => {
    return css(_pointTag, style, valueStyle);
  }
}

// $("#container .container-inner .test")
// .addClass("color-green")

// $("#container .container-inner .test")
// .removeClass("color-green")

//return undefiend, should string
// console.log($(".test")
// .attr('title')
// )
// console.log($(".test")
// .attr('title', 'new title')
// )

// $('.test')
// .append('<h2>new content</h2>');

// $('h2').remove();

// console.log($('.test')
// .children('.example')
// .addClass('color-red')
// )

console.log($(".example").css('background-color', 'orange'));