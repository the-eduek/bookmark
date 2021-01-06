// Variables
const navBar = document.querySelector(".nav");
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const faqQuestions = document.querySelectorAll(".btn--question");
const featureItems = document.querySelectorAll(`[data-key]`);
const features = document.querySelectorAll(`[data-keyName]`);

// Event Listeners
hamburger.addEventListener("click", toggleNav);

faqQuestions.forEach(question => {
    question.addEventListener("click", showAnswer);    
});

featureItems.forEach(featureTitle => {
    featureTitle.addEventListener("click", showFeature)
});

// Functions
function toggleNav() {
    const openCloseImage = hamburger.querySelector("img");
    navBar.classList.toggle("nav--mobile");

    if (navBar.classList.contains("nav--mobile")) {
        openCloseImage.setAttribute("src", "./images/icon-close.svg");
        header.style.paddingTop =  "94px";

        const navLinks = navBar.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", ()=> {
                openCloseImage.setAttribute("src", "./images/icon-hamburger.svg");
                header.style.paddingTop = "0";
                navBar.classList.remove("nav--mobile");                
            })
        })
    } else {
        openCloseImage.setAttribute("src", "./images/icon-hamburger.svg");
        header.style.paddingTop = "0";
    }
}

function showAnswer() {
    const activeQuestions = document.querySelectorAll(".btn--question-active");

    this.classList.toggle("btn--question-active");
    const answerPanel = this.nextElementSibling;

    if (this.classList.contains("btn--question-active")) {
        answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
        
        for (let i = 0; i < 2; i++) {
            activeQuestions[0].classList.remove("btn--question-active");  
            activeQuestions[0].nextElementSibling.style.maxHeight = "0";
        }        
    } else {
        answerPanel.style.maxHeight = "0";
    };
}

function showFeature() {
    const key = this.getAttribute("data-key");

    featureItems.forEach(featureTitle => {
        featureTitle.classList.remove("feature__title--active");
    });

    features.forEach(item => {
        if (item.getAttribute("data-keyName") === key) {
            item.classList.add("features-info--current");
            this.classList.add("feature__title--active");                
        } 

        if (item.getAttribute("data-keyName") != key){
            item.classList.remove("features-info--current");
        }
    });    
}