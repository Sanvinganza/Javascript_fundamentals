export const attr = (pointTags, attribute, attrValue) => {
    if (attrValue) {
        pointTags[0].setAttribute(attribute, attrValue);
    }

  return pointTags[0].getAttribute(attribute);
};