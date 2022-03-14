export const setUrlHashParameter = (param, value) => {
    window.location.hash = `${param}=${value}`;
}