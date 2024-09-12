
// get slider image
var slidesImage = Array.from(document.querySelectorAll(".slider img"))

// get number of slices

var slidesCouter = slidesImage.length;
// --------
var currentSlide = 4;
// --------
var slideCountElement = document.getElementById("slider-number")
// --------
var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")
// --------
nextButton.onclick = next ;
prevButton.onclick = prev ;
// --------
// --------

var pag = document.createElement('ul')
pag.setAttribute("id", "pag-ul");
document.getElementById("indicators").appendChild(pag);


for (var i = 1; i<slidesCouter; i++) {
    var pagItem = document.createElement("li");
    pagItem.setAttribute("data-idex", i)
    pagItem.appendChild(document.createTextNode(i));
    pag.appendChild(pagItem)
}


var pageUlCreated = document.getElementById("pag-ul");
var bulltes = Array.from(document.querySelectorAll("#pag-ul li"));


for (let i = 0; i < bulltes.length; i++) {
    bulltes[i].onclick = function ()  {
        currentSlide = parseInt(this.getAttribute("data-idex"))
        theCheaker()
    }
}






function next () {
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theCheaker();
    }
}
function prev() {
    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        theCheaker();
    }
}

function theCheaker() {
    slideCountElement.textContent = ("slide #" + (currentSlide) + "of" + " " + (slidesCouter))
    removeActiveFromLi () 
    slidesImage[currentSlide -1].classList.add("active");
    pageUlCreated.children[currentSlide -1].classList.add("active")

    if (currentSlide == 1) {
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled")
    }

    if (currentSlide == slidesCouter) {
        nextButton.classList.add("disabled")

    } else {
        nextButton.classList.remove("disabled")
        
    }
}
theCheaker()



function removeActiveFromLi () {
    slidesImage.forEach((img) => {
        img.classList.remove("active");
    })
    bulltes.forEach((li)=>{
        li.classList.remove("active")
    })
}










