
var overlay=document.getElementById('overlay');
overlay.style.display='none';
 
   var close=document.getElementById('close');

function openVideo(){
    var video=document.getElementById("youtube");
    video.src="https://www.youtube.com/embed/-jV0c1yhksY?ecver=2";
    overlay.style.display="block";
}



   
close.addEventListener('click', function(e){    
    overlay.style.display="none";

})