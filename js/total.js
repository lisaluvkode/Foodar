/*Request Total*/
var form = document.getElementById("requestform");

form.addEventListener("change", updateFormTotals);

function updateFormTotals(){
	var result = 0;
	console.log("updating total...");

	//get style
	var styleArr = document.getElementsByClassName("price");
	for (i=0; i < styleArr.length; i++){
		if (styleArr[i].checked){
			result = Number(styleArr[i].value);
		}
	}
	//get tip
	var styleArr = document.getElementsByClassName("tip");
	for (i=0; i < styleArr.length; i++){
		if (styleArr[i].checked && result>0){
			result *= (1 + styleArr[i].value / 100);
		}
	}

	//keep only two decimal places
	result = result.toFixed(2);

	var totalElem = document.getElementById("total");
	totalElem.innerHTML = result;
}

/*confirm submission*/
var form = document.getElementById('requestform');
form.addEventListener("submit", function(){
  alert("Thank you for submitting the Request form. We will contact you soon!");
  console.log("The form has been submitted!");
});
