export const text = (pointTags) => {
    let result = '';
    pointTags.forEach(item => {
        result += (' ' + item.innerHTML);
    });

    return result;
}