function greetUser() {
    let name = document.getElementById("nameInput").value;
    const color = document.getElementById('colorInput').value.trim();


    if (name.trim() === "") {
        alert("Please enter your name first!");
    } else {
        const extra = color.length ? ` Your favorite color is ${color}!` : '';
        alert("Hello, " + name + "!" + extra);
    }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);