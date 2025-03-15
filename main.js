check_value = document.getElementById("check").checked;


function margin_check(){
    check_value = document.getElementById("check").checked;
    console.log(check_value);
    navbar_height = document.getElementById("hamburger").offsetHeight;
    console.log(navbar_height)
    if(check_value){
        document.getElementById("introduction").style.marginTop = navbar_height + "px"; 
    }else{
        document.getElementById("introduction").style.marginTop = 0;
    }
}






function OpenFile() {
  window.open("https://divyaimage.online/", "_blank");
}

function OpenFile1() {
  window.open("#");
}
