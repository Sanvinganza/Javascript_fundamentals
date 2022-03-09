export const remove = (pointTag) => {
    pointTag.forEach( item => {
        item.parentElement.removeChild(item); 
    })
}