createNewButton = () => {
    console.log("button clicked")
    let newButton = document.createElement('button');
    newButton.innerHTML = 'Submit';
    newButton.classList.add('submit');
    newButton.onclick = function () {createNewButton()};
    let element = document.getElementById("container");
    element.appendChild(newButton);
}