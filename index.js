var cont = document.getElementById("cont");
var output = "";
for (var i = 0; i < 4; i++) {
  cont.innerHTML = output +=
    '<input type="radio" value="1" name="choice">1</input><input type="radio" value="2" name="choice">2</input><input type="radio" value="3" name="choice">3</input><br/>';
}
var radios = document.getElementsByName("choice");
console.log(radios);
for (var i = 0; i < radios.length; i++) {
  radios[i].onclick = function() {
    document.getElementById("choiceLabel").innerText = this.value;
  };
}
