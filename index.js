const hamburger = document.getElementsByClassName("hamburger")[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const submittext = document.getElementById('contact-form');
const message = document.getElementById("message");
const email = document.getElementById("email");
const Name = document.getElementById("name");
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
  window.addEventListener('resize', () => { 
    if (window.innerWidth > 768) {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }
  }
  );
  
});
function setupMobileMenu() {
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        console.log(hamburger)
        console.log(navLinks)
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
      
      // Close mobile menu when clicking a link
      const navLinksItems = document.querySelectorAll('.nav-link');
      navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
          }
        });
      });
    }
  }
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .nav-link.active {
        color: #6366f1;
      }
      
      .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        padding: 1.5rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 100;
      }
      
      .hamburger.active span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      
      .hamburger.active span:nth-child(2) {
        opacity: 0;
      }
      
      .hamburger.active span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    </style>
  `);
 submittext.addEventListener("submit",(e)=>{
    e.preventDefault();
    let params = {
        name:Name.value,
        email : email.value,
        message : message.value,
    }
      emailjs.send("service_v9ih2vi","template_01akm61",params).then(function(response) {
        const successmessage = document.getElementById('form-success');
        successmessage.style.display = 'block';
        setTimeout(() => {
          successmessage.style.display = 'none';
        }, 5000);
     }, function(error) {
        console.log('Error sending email:', error);
        alert('Failed to send email. Please try again.');
    });
    email.value = "";
    Name.value = "";
    message.value = "";
    });