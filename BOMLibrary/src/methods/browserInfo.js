export const browserInfo = () => {
    for(let key in navigator){
        console.log(key, ':', navigator[key]);
    }
}