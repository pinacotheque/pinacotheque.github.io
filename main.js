function myfunction() {
  var moreText = document.getElementById("text");
  var btnText = document.getElementById("more");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}
