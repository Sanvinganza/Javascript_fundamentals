export const setUrlParameter = (param, value) => {
    let params = new URLSearchParams(window.location.search);
    params.set(param, value);
    history.replaceState(null, null, "?" +params.toString());
}