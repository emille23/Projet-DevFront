document
  .getElementsByClassName("header__burger")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("header__menu")[0].style.left = "0vw";
  });
document
  .getElementsByClassName("header__burger")[1]
  .addEventListener("click", function () {
    document.getElementsByClassName("header__menu")[0].style.left = "-80vw";
  });
