
window.onload = function() {
    const aboutMe = document.getElementById("description");
    const contactMe = document.getElementById("contactArea");
const yOffset = aboutMe.offsetTop;
const contactMeOffset = contactMe.offsetTop;

console.log(yOffset);
console.log(contactMeOffset);

document.addEventListener("scroll", function(){
    console.log(window.scrollY);
    if(window.scrollY > yOffset) {
        console.log("%cHello!!!!", 'color: red; font-weight: bold;');
    }
})

}



