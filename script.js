
//    <!-- DARK MODE -->

const themeButton =
document.getElementById("themeToggle");

function loadTheme(){

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

        if(themeButton){
            themeButton.innerHTML = "☀️";
        }

    }else{

        document.body.classList.remove("dark");

        if(themeButton){
            themeButton.innerHTML = "🌙";
        }
    }
}

function toggleTheme(){

    document.body.classList.toggle("dark");

    const isDark =
    document.body.classList.contains("dark");

    if(isDark){

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeButton.innerHTML = "☀️";

    }else{

        localStorage.setItem(
            "theme",
            "light"
        );

        themeButton.innerHTML = "🌙";
    }
}

loadTheme();


//    TYPING EFFECT


const roles = [
    "Python Developer",
    "Django | FastAPI Developer",
    "Backend Developer",
    "Build a Custom AI Chatbot"
];

let roleIndex = 0;

const typingElement =
document.querySelector(".typing");

if(typingElement){

    setInterval(() => {

        typingElement.textContent =
        roles[roleIndex];

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

    },2000);

}


//    SCROLL TO TOP BUTTON


const topBtn =
document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


//    ACTIVE NAVBAR LINK

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){
            link.classList.add("active");
        }

    });

});


//    CONTACT FORM


const form =
document.querySelector("form");

if(form){

    form.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            form.reset();

        }
    );

}



