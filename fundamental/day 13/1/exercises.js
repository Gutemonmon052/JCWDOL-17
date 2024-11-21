function gone(){
  document.querySelector("body").style.backgroundColor = "#FAFAFA";
  document.querySelector(".Modal").style.display = "none";
  document.querySelector(".container").style.display = "flex";
}

function show(){
  document.querySelector("body").style.backgroundColor = "rgba(109,109,109,0.46)";
  document.querySelector(".Modal").style.display = "block";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".Modal").style.animation = "easeIn 0.3s ease-in-out";
}

