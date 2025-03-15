window.onload = function() {
  if (window.innerWidth <= 1024) {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("introduction").style.marginTop = "0";
  }
};

document.getElementById("introduction").style.marginTop = 0;


function margin_check() {
  let check_value = document.getElementById("check").checked;
  let navbar_height = document.getElementById("hamburger").offsetHeight;

  if (window.innerWidth <= 1024) {  // Only for mobile
      if (check_value) {
          document.getElementById("hamburger").style.display = "block";
          document.getElementById("introduction").style.marginTop = navbar_height + "px";
      } else {
          document.getElementById("hamburger").style.display = "none";
          document.getElementById("introduction").style.marginTop = "0";
      }
  } else {
      document.getElementById("hamburger").style.display = "block"; // Always visible on desktop
  }
}

// Run when window resizes (fixes issue when switching between mobile & desktop)
window.addEventListener("resize", margin_check);








function OpenFile() {
  window.open("https://divyaimage.online/", "_blank");
}

function OpenFile1() {
  window.open("#");
}
