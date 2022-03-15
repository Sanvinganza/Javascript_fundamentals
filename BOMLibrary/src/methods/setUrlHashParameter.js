export const setUrlHashParameter = (param, value) => {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set(param, value);
    history.replaceState(null, null, "#" +searchParams.toString());
}