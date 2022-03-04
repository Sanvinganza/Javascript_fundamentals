export const addClass = (pointTags, tag) => {
    pointTags.forEach(item => {
        item.classList.add(tag);
    });
    console.log(pointTags)
}