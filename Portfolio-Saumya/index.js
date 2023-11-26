// index.js
function changetext(){
  let im = document.getElementById('im');
  let devImage = new Image();
  devImage.src = "C:\Users\dell\Desktop\projects front-end\portfolio_htlmcssjs\yoda.jpg";
  devImage.setAttribute('width', '300px');
  devImage.setAttribute('height', '300px');
  im.appendChild(devImage);
}



document.addEventListener("DOMContentLoaded", function () {
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
});


document.addEventListener("DOMContentLoaded", function () {
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");
    sections.forEach((section) => {
        section.classList.remove("active-section");
    });
    document.getElementById(sectionId).classList.add("active-section");
});
});

const elementsToChange = document.querySelectorAll('.CWstyle');

elementsToChange.forEach(element => {
element.addEventListener('mouseover', function () {
  this.style.color = 'red';
});

element.addEventListener('mouseout', function () {
  this.style.color = '#fff';// Reset to default color
});
});

const elementsToColor = document.querySelectorAll(' .card-link');

elementsToColor.forEach(element => {
element.addEventListener('mouseover', function () {
  this.style.color = 'blue';
});

element.addEventListener('mouseout', function () {
  this.style.color = 'black';// Reset to default color
});
});




const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
e.preventDefault();
const email = document.getElementById("email").value;
// Handle form submission (send email, show confirmation, etc.)
});
});

var btnn = document.getElementaryByIs('btnn');
btnn.addEventListener('click', function(e){
e.preventDefault()
var name = document.getElementById('name').value;
var name = document.getElementById('email').value;
var name = document.getElementById('message').value;
var body = 'name: ' +name + '<br/> email: '+ email + '<br/> message:' +message; 


      Email.send({
        SecureToken : "c41eedfb-70e3-483d-bc6c-95e3d4477566",
        To : '2021pcecssaumya153@poornima.org',
        From : "you@isp.com",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

})