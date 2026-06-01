
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeToggle.innerHTML = "☀️";
  }else{
    themeToggle.innerHTML = "🌙";
  }
});


// ===============================
// EMAILJS CONFIGURATION
// ===============================

// Create account:
// https://www.emailjs.com/

emailjs.init("YOUR_PUBLIC_KEY");


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    templateParams
  )
  .then(function(response){

    document.getElementById("status").innerHTML =
      "Message sent successfully!";

    contactForm.reset();

  }, function(error){

    document.getElementById("status").innerHTML =
      "Failed to send message.";

  });

});