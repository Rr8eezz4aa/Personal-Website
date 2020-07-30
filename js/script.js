window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight/2 || document.documentElement.scrollTop > window.innerHeight/2) {
        document.getElementById("navbar").classList.add("show");
    } else {
        document.getElementById("navbar").classList.remove("show");
    }
}