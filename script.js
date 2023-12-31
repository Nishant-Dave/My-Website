// ------------------- About me section tab script -------------------

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// ---------------- Mobile view side menu script ----------------
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// -------------------- READ MORE TOGGLE -----------------

function toggleDescription(skill){
    var shortDesc = document.getElementById(skill + '-desc');
    var fullDesc = document.getElementById(skill + '-full');
    var readMoreBtn = document.querySelector('#' + skill + '-section .read-more-btn');

    var fullDescDisplay = window.getComputedStyle(fullDesc).getPropertyValue('display');


    if (fullDesc.style.display === 'none') {
        shortDesc.style.display = 'none';
        fullDesc.style.display = 'block';
        readMoreBtn.innerHTML = 'Read less';

    }
    else {
        shortDesc.style.display = 'block';
        fullDesc.style.display = 'none';
        readMoreBtn.innerHTML = 'Read more';

    }
}


// -- ------------------- WEBSITE CONTACT FORM SCRIPT ----------------- 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwgNPB9SWwDBOeM8xipxhSmel1c8pawjPfZJNXHSRF3fO9IZQ57Qe7U6QKXPvY_Ww/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""}, 5000)
            form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
