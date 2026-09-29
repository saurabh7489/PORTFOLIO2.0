const emailbtn = document.getElementById("emailbtn");
const Githubbtn = document.getElementById("Githubbtn");
const LinkedInbtn = document.getElementById("LinkedInbtn");
const Twitterbtn = document.getElementById("Twitterbtn");

const view02 = document.getElementById("view02");

const view = document.querySelector("svg");
const trigger = document.querySelector(".trigger");
const Aboutcontent = document.querySelectorAll("#Aboutcontent");

emailbtn.addEventListener('click',function(){
    window.open("mailto:saurabhpandey7489@gmail.com");
})


Githubbtn.addEventListener('click',function(){
   window.open("https://github.com/saurabh7489");
    
    
})

LinkedInbtn.addEventListener('click',function(){
    window.open("https://www.linkedin.com/in/sourabhsprofile/");
})


Twitterbtn.addEventListener('click',function(){
    window.location.href="https://x.com/Sourbhh01";
})





// view.addEventListener('click',function(){
//   const Aboutcontent=document.querySelector("#Aboutcontent");

//   if ( view.style.transform==="rotate(180deg)"){
//     view.style.transform = "rotate(0deg)";
   
//     Aboutcontent.classList.toggle('toggle');
//      Aboutcontent.style.transition = "transform 0.5s ease-in 0.5s ";
//   }
//   else{
//     view.style.transform = "rotate(180deg)";
//      Aboutcontent.style.transition = "transform 0.5s ease-out 0.5s ";
//      Aboutcontent.classList.toggle("toggle");
//   }
// });
 

// view02.addEventListener('click',function(){
//   const Aboutcontent02=document.querySelector("#Aboutcontent02");

//   if ( view02.style.transform==="rotate(180deg)"){
//     view02.style.transform = "rotate(0deg)";
   
//     Aboutcontent02.style.visibility="hidden";
//      Aboutcontent02.style.transition = "transform 0.5s ease-in 0.5s ";
//   }
//   else{
//     view02.style.transform = "rotate(180deg)";
//      Aboutcontent02.style.transition = "transform 0.5s ease-out 0.5s ";
//      Aboutcontent02.style.visibility = "visible";
//   }
// });

// view.addEventListener('click',function(){
//     if(view.style.transform==="rotate(180deg)"){
//         view.style.transform='rotate(0deg)';
//     }
//     else{
//         view.style.transform='rotate(180deg)';
//     }

// })


trigger.addEventListener("click", function () {
  // Toggle arrow rotation
  view.classList.toggle("rotate-180");

  // Toggle visibility and opacity while keeping the height/space intact
  Aboutcontent.classList.toggle("max-h-40");
  Aboutcontent.classList.toggle("opacity-0");
});
