console.log("from app.js: Hello world!");

document.getElementById("hideButton").onclick = HideButton;
document.getElementById("showButton").onclick = ShowButton;

$("#hideButton").click(HideButton);
$("#showButton").click(ShowButton);

function HideButton() {
  console.log("hideButton clicked");
  // document.getElementById("favouriteFoods").style.display = "none";
  // $("#favouriteFoods").fadeOut();
  $("#favouriteFoods").slideUp();
}

function ShowButton() {
  console.log("showButton clicked");
  // document.getElementById("favouriteFoods").style.display = "block";

  // '#' looks for 'class' tag; '.' looks for 'id' tag
  $("#favouriteFoods").slideDown();
  // $("#showButton").css("color", randColor())
  // $("#favouriteFoods").css("color", randColor())
  setColor("#showButton")
  setColor("#favouriteFoods")
}

function setColor(objectID){
  $(objectID).css("color", randColor(objectID))
}

function randColor(objectID){
  // var colors = ["red", "blue", "green", "yellow"]
  // var randomIndex = Math.floor(Math.random()*colors.length);
  // return colors[randomIndex];

  var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  console.log(objectID + ": " + color);
  return color;
}
