var descriptionTop;
var contactAreaTop;
var topOfPageTop;
window.onload = function() {
    const topOfPage = document.getElementById("flexContainer");
    const description = document.getElementById("description");
    const contactArea = document.getElementById("contactArea");
    // console.log(topOfPage);

    topOfPageTop = topOfPage.offsetTop;
    descriptionTop = description.offsetTop;
    contactAreaTop = contactArea.offsetTop;
    
    console.log("onload offset " + window.pageYOffset);
    console.log("THIS IS DTOP " + descriptionTop);
    console.log("contact area top is " + contactAreaTop);
    console.log("top is " + topOfPageTop);

    // console.log(contactAreaTop);
    // console.log(contactMeOffset);
    // console.log(topOfPageTop);

    window.onscroll = function(){
        myFunction(window.pageYOffset);
    }
};

function myFunction(event) {
    console.log("Im in myfunction");
    if (event >= 0 && event < descriptionTop/2) {
        console.log("im in here");
        document.getElementById("homeAwesome").style.color="#18ffdc";
        document.getElementById("contactmeAwesome").removeAttribute("style");
        document.getElementById("aboutmeAwesome").removeAttribute("style");
    }
    else if (event >= descriptionTop/2 < contactAreaTop/2) {
        document.getElementById("homeAwesome").removeAttribute("style");
        document.getElementById("contactmeAwesome").removeAttribute("style");
        document.getElementById("aboutmeAwesome").style.color="#18ffdc";
        console.log(descriptionTop);
    }
    if (event >= contactAreaTop/2) {
        document.getElementById("aboutmeAwesome").removeAttribute("style");
        document.getElementById("homeAwesome").removeAttribute("style");
        document.getElementById("contactmeAwesome").style.color="#18ffdc";
        console.log(contactAreaTop);
    }
}

    window.addEventListener("resize", window.onload);

