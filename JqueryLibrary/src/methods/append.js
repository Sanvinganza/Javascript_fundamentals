export const append = (pointTag, content) => {
    pointTag.forEach( item => {
        item.insertAdjacentHTML('beforeend', content)
    })
}