export const empty = (pointTag) => {
    pointTag.forEach( item => {
        item.innerText = '';
    });
}