const emailbtn = document.getElementById("emailbtn");
const Githubbtn = document.getElementById("Githubbtn");
const LinkedInbtn = document.getElementById("LinkedInbtn");
const Twitterbtn = document.getElementById("Twitterbtn");

const view02 = document.getElementById("view02");

const view = document.querySelectorAll(".view");

const Aboutcontent = document.querySelectorAll(".Aboutcontent");

const themeToggle = document.getElementById("themeToggle");




themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

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




view.forEach((view)=>{
view.addEventListener('click',function(){
  const Aboutcontent=view.parentElement.parentElement.querySelector(".Aboutcontent");

   view.classList.toggle("rotate-180");
   
    Aboutcontent.classList.toggle("toggle");
     Aboutcontent.style.transition = "transform 0.5s ease-in 0.5s ";
      Aboutcontent.classList.toggle("max-h-40");
   Aboutcontent.classList.toggle("opacity-0");



});
});
 
