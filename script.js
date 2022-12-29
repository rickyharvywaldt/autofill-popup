// display by default set to "none" in css file, this function will set display
// to "block" 
var my_popup = document.getElementById("my-popup");

function showPopUp() {
    my_popup.style.display="block";
}
setTimeout(showPopUp,3000); // this function will run after 3 seconds

const btn = document.querySelector(".button");

btn.addEventListener("click", () => { // listens for button click
    btn.classList.add("button--loading"); // add the css to the button class
});

btn.addEventListener('click',function handleClick() { // listens for button click
    document.getElementById("button-text").innerHTML = "Processing"; // change the string in the html for button
});

setTimeout(function() {
var timeleft = 10000000; // pending buy default value backend
var timeup = 0; // filled default value backend
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0", // set pending buy on frontend
    document.getElementById("countup").innerHTML = "10110748"; // set filled on frontend
  } else {
    document.getElementById("countdown").innerHTML = timeleft, // pending buy on frontend decrease until zero
    document.getElementById("countup").innerHTML = timeup; // filled on frontend increase until timeleft <= 0
  }
  timeup += 3333; // increase by 3333
  timeleft -= 3333; // decrease by 3333
}, 1); // every 1 milliseconds
}, 5500); // this function will run after 5.5 seconds

