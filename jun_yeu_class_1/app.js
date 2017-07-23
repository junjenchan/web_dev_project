console.log("from app.js: Hello World!");

function onHomeButtonClick(){
  console.log("Home button clicked");
  hideAll()
  document.getElementById("home").style.display = "block";
}

function onFruitsButtonClick(){
  console.log("Fruits button clicked");
  hideAll()

  // jquery simplified formatting
  $("#fruits").css("display", "block");

  // document.getElementById("fruits").style.display = "block";
}

function onMemesButtonClick(){
  console.log("Memes button clicked");
  hideAll()
  document.getElementById("memes").style.display = "block";
}

function onContent1ButtonClick(){
  console.log("Content 1 button clicked");
  hideAll()
  document.getElementById("content_1").style.display = "block";
}

function hideAll(){
  var ids = ["fruits", "memes", "content_1"];
  for (i=0; i < ids.length; i++){
    document.getElementById(ids[i]).style.display = "none";
    console.log(ids[i]);
  }
}
