import myJquery from "../index";

export const children = (pointTag, tag) => {
  let result = [];

  pointTag.forEach( item => {
      const element = item.querySelectorAll(tag);

      if(element.length){
          element.forEach( item => {
              result.push(item);
          })
      }
  });

  return result;
};
