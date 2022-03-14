export const navButtons = () => {
    let prevButton = document.createElement("button");
    prevButton.innerHTML = "prev page";

    document.body.appendChild(prevButton);
    prevButton.onclick = () => history.back();

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "next page";

    document.body.appendChild(nextButton);
    nextButton.onclick = () => history.forward();
}