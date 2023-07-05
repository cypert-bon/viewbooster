const input = document.querySelector(".input-area input");
const numOfTabs = document.querySelector(".input-area select");
const playBtn = document.querySelector(".input-area button");
const iframeCard = document.querySelector(".main .wrapper");



    

let url;

const playVideo = () => {

   if (input.value == "") {   
     input.classList.add("error");  
     setTimeout(() => {
       input.classList.remove("error");
     }, 3000) 
     return false;
   } else {
      if (input.value.indexOf("https:/\/youtu.be/") != -1) { 
      url = input.value.slice(17);  
      } else if (input.value.indexOf("https:/\/m.youtube.com/watch?v=") != -1) {
      url = input.value.slice(30, 41);
      } else {
         url = "invalid url";   
         input.classList.add("error");    
         setTimeout(() => {
       input.classList.remove("error");
     }, 3000) 
         return false;
      }
   }
   iframeCard.innerHTML = "";
   for (i = 0; i < numOfTabs.value; i++) {
      let iframeTag = `<iframe id="iframe" sandbox="allow-scripts" src="https:/\/www.youtube.com/embed/${url}"></iframe>`;
           iframeCard.innerHTML += iframeTag;
       var fdoc = document.getElementById("iframe").contentDocument;

    fdoc.getElementsByTagName("video")[0].playbackRate = 4; // or whatever

 
      
  }
     
}




playBtn.addEventListener("click", playVideo);
