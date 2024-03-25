const modalContainer = document.querySelector(".container")
const button = document.querySelector(".button");

button.addEventListener("click",() => {
    modalContainer.classList.remove("hide");
})

modalContainer.addEventListener("click",(event) => {
    const btn = event.target.name;
    if(btn === "close") modalContainer.classList.add("hide");
})