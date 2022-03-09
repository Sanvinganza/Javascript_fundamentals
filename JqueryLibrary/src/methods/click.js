export const click = (pointTags, fn) => {
    pointTags.forEach(item => {
        item.addEventListener("click", fn, false);
    });
}