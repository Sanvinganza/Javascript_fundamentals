export const attr = (pointTags, tag, attrValue) => {
    console.log(pointTags)

    pointTags.forEach( item => {

        console.log(item.attributes[tag])
        if(item.attributes[tag]) {
            if(attrValue) {
                item.attributes[tag].value = attrValue;
            }
            console.log(item.attributes[tag].value)
            return item.attributes[tag].value;
        }
    })     
}