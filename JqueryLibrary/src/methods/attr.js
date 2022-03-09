export const attr = (pointTags, tag, attrValue) => {
    pointTags.forEach( item => {
        if(item.attributes[tag]) {
            if(attrValue) {
                item.attributes[tag].value = attrValue;
            }
            
            return item.attributes[tag].value;
        }
    })     
}