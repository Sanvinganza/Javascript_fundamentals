export const attr = (pointTags, tag) => {
    let result;
    pointTags.forEach(item => {
        result = item.attributes.getNamedItem(tag);
        console.log(result)
        if(result) return result;
    });
}