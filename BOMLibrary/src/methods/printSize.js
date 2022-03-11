export const printSize = () => {
    window.addEventListener(
        'resize',
        (event) => {
            console.log(`h: ${screen.height} w: ${screen.width}`)
        }
    )
}