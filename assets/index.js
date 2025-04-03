let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});
let currentwordindex=0;
let maxwordindex=words.length-1;
words[currentwordindex].style.opacity="1";
let changetext=()=>{
    let currentword=words[currentwordindex];
    let nextword=currentwordindex===maxwordindex ? words[0] :words[currentwordindex +1];
    Array.from(currentword.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
        letter.className="letter in";
        
    },340+i*80);
    });
    currentwordindex=currentwordindex===maxwordindex?0:currentwordindex+1;

};
changetext();
setInterval(changetext,3000);
//circle skill///
const circles = document.querySelectorAll(".circle");

circles.forEach(elem => {
    var dots = parseInt(elem.getAttribute("data-points"));
    var marked = parseInt(elem.getAttribute("data-percent"));
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;
    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked')
    }
});
let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');
function activeMenu(){
    let  len=section.length;
    while(--len && window.scrollY+97 <section[len].offsetTop){}
    menuLi.forEach(sec=>sec.classList.remove("active"));
    menuLi[len].classList.add("active");

}
activeMenu();
window.addEventListener("scroll",activeMenu);
const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>50)
})

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});
const scrollScale=document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));
const scrollBottom=document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));
const scrollTop=document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));
function validateForm(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let description = document.getElementById("description").value.trim();
    let alertMessage = document.getElementById("alert-message");

    if (!name || !email || !phone || !address || !description) {
        event.preventDefault();  // Stop form submission
        alertMessage.innerText = "Please fill your Details!";
        alertMessage.style.color = "red";
        alertMessage.style.display = "block";
        return false;
    }

    return true;  // Submit form if valid
}