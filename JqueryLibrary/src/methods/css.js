export const css = (pointTag, newStyle, valueStyle) => {
    if(valueStyle) {
        pointTag.forEach(item => {
            item.style.setProperty(newStyle, valueStyle);
        });
    }
    
    return pointTag[0].style[newStyle];
}