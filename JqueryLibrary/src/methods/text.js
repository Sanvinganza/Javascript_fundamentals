export const text = (pointTags) => {
    let result = '';

    pointTags.forEach(item => {
        result += ` ${item.innerText}`;
    });

    return result;
}