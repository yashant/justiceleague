var myImgs= document.querySelectorAll('img');
var overlay=document.getElementById('overlay');
overlay.style.display='none';
 
    for (i=2; i<=(myImgs.length+1)-2; i++){    
            myImgs[i].addEventListener('click',function(evt){
            console.log("window_clicked");   
            overlay.style.display='block';  
            document.getElementById('overlayImg').src= evt.target.src;  
        
            });
        } 
overlay.addEventListener('click', function(e){  
    if (overlay.style.display==='block'){
              if (document.getElementById('overlayImg').contains(e.target)){
                     console.log("Clicked in box");
                }
            else{
                console.log("outside");
                overlay.style.display='none';         
                }
        }
});