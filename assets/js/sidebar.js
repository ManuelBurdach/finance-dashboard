// SIDEBAR LEFT ----------------------------------------------------------------------

// SHOW & HIDE SIDEBAR ON SMALL BREAKPOINT
let sidebarLeft = document.querySelector("#sidebarLeft");

document.querySelector("#openSidebarLeft").addEventListener("click", () => {
  sidebarLeft.classList.toggle("toggleLeft");
  document.querySelector("#openSidebarLeft").classList.toggle("aktivLeft");
});

// ADD FRIENDS TO FAVORITE ON SIDEBAR LEFT
let user = ["assets/img/seitenleisteL/AvatarImage(3).svg", "assets/img/seitenleisteL/AvatarImage(2).svg", "assets/img/seitenleisteL/AvatarImage(1).svg", "assets/img/seitenleisteL/AvatarImage.svg"];
document.querySelector("#addFavorit").addEventListener("click", () => {
  let button = document.createElement("button");
  button.type = "button";
  let deleteFavorit = document.createElement("p");
  deleteFavorit.innerText = "x";
  deleteFavorit.classList = "delete";
  deleteFavorit.addEventListener("click", () => {
    button.remove();
  });
  button.appendChild(deleteFavorit);
  let img = document.createElement("img");
  img.src = user[Math.floor(Math.random() * 4)];
  button.appendChild(img);
  document.querySelector("#favorits button:first-child").after(button);
});

// SIDEBAR RIGTH ----------------------------------------------------------------------
let sidebarRigth = document.querySelector("#sidebarRigth");

document.querySelector("#openSidebarRigth").addEventListener("click", (event) => {
  sidebarRigth.classList.toggle("toggleRigth");
  document.querySelector("#openSidebarRigth").classList.toggle("aktivRigth");
});
