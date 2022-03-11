export const printSize = () => {
    window.addEventListener(
        'resize',
        () => {
            console.log(`h: ${screen.height} w: ${screen.width}`)
        }
    )
}