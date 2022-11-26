let play = document.querySelector(".fa-play-circle");
play.onclick = () => {
  if (play === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
