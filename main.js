document.getElementById("submit").onclick = function () {
    let username = document.getElementById("username").value;
    document.getElementById("header").textContent =
    "Hello" + ((username !== "") ? ", " : " ") + username;

};
function resetBoxes() {
    document.getElementById("redBox").style.backgroundColor = "white";
    document.getElementById("blueBox").style.backgroundColor = "white";
    document.getElementById("greenBox").style.backgroundColor = "white";
    document.getElementById("yellowBox").style.backgroundColor = "white";
}
document.getElementById("redBox").onclick = function() {
    resetBoxes();
    this.style.backgroundColor = "red";
};
document.getElementById("blueBox").onclick = function() {
    resetBoxes();
    this.style.backgroundColor = "blue";
};
document.getElementById("greenBox").onclick = function() {
    resetBoxes();
    this.style.backgroundColor = "green";
};
document.getElementById("yellowBox").onclick = function() {
    resetBoxes();
    this.style.backgroundColor = "yellow";
};
