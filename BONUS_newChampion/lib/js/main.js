document.body.onload = addElement;
function addElement() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("champ_container");
  newDiv.classList.add("pyke");
  let newH2 = document.createElement("h2");
  newH2.style.color = "#92fdfe";
  let newContent = document.createTextNode("pyke, the bloodharbor ripper");
  newDiv.appendChild(newH2);
  newH2.appendChild(newContent);
  let currentDiv = document.getElementsByClassName("main_container")[0];
  newDiv.style.backgroundImage = "url('./assets/pyke.jpg')";
  newDiv.style.backgroundColor = "#92fdfe";
  currentDiv.appendChild(newDiv);
}
