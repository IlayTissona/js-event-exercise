const button = document.querySelector("#button");

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1")); //does not remove function from line 3
//because it is not the same function, identical, but not the same one.

button.onclick = () => alert(2);

//both will run
