$(document).ready(() => {
    showDivs(slideIndex, document.getElementsByClassName("artisanSlides"));
    showDivs(slideIndex, document.getElementsByClassName("foodSlides"));
    showDivs(slideIndex, document.getElementsByClassName("giftSlides"));

    let sections = $(".sections");
    sections[0].style.display = "none";
    // sections[0].style.display = "block";
    $("#navList").children().each(function(index) {
        this.id = index;
        $(this).on("click", (item) => {
            sections.each(function(index2) {
                sections[index2].style.display = "none";
            });
            sections[this.id].style.display = "block";
            switch (this.id) {
                case 0:
                    showDivs(slideIndex, document.getElementsByClassName("artisanSlides"));
                    break;
                case 1:
                    showDivs(slideIndex, document.getElementsByClassName("foodSlides"));
                    break;
                case 2:
                    showDivs(slideIndex, document.getElementsByClassName("giftSlides"));
                    break;

                default:
                    break;
            }
        });
    });
});
var slideIndex = 1;

function showDivs(n, x) {
    var i;
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(showDivs, 2000);
}

function plusDivs(n, x) {
    showDivs(slideIndex += n, x);
}