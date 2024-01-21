
//efeito mouseover
var lengenda = document.querySelector(".legenda");
lengenda.addEventListener("mouseover", function () {
    var email = document.querySelector("#email")
    email.classList.remove("hide_info")
});

var lengenda = document.querySelector(".legenda");
lengenda.addEventListener("mouseout", function () {
    var email = document.querySelector("#email")
    email.classList.add("hide_info")
});
