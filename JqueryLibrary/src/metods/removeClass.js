export const removeClass = (pointTags, tag) => {
    pointTags.forEach(item => {
        item.classList.remove(tag);
    });
}