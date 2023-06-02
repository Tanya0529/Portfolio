const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Bug Hunter";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 8000); 
}

textLoad();
setInterval(textLoad, 12000);

