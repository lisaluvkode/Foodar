/*banner*/
function showAds() {
  document.getElementsByClassName('banner')[0].style.display="block";
}
setTimeout(showAds, 5000);

/*close banner*/
var span = document.getElementsByClassName('close')[0];
span.onclick=function(){
  document.getElementsByClassName('banner')[0].style.display = "none";
}

/*citychecker*/
function cityChecker() {
  var number = document.getElementById('zipInput').value;
  var text;

  if (number >= 20000 && number <=99999) {
    text = "City is available";
    result.style.color = "green";
  } else {
    text = "City is not yet in our system";
    result.style.color = "red";
  }
  document.getElementById('result').innerHTML = text;
}
