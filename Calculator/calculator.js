/*let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function(){
    spinnerWrapper.style.display= 'none';
    });*/
$(window).on("load",function(){
    $(".progress-wrapper").fadeOut("slow");
});
console.log("nice")
/*const animated = document.querySelector(".animated");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
});*/