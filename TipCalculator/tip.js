// Variables
var formValid = false;

// Event Listeners
var totalInput = document.getElementById('BillTotal');
var totalButton = document.getElementById('calculateButton');
var tipAmount = document.getElementById('TipAmount');
var numDiners = document.getElementById('DiningTotal');
var tipText = document.getElementById('tipAmount');
totalInput.addEventListener('change', validateTotal);
totalButton.addEventListener('click', totalBill);

// Function to validate bill amount
function validateTotal(evt) {

    if(!isNaN(totalInput.value) && parseFloat(totalInput.value) > 0) {
        formValid = true;
        totalInput.classList.add("is-valid");
        totalInput.classList.remove("is-invalid");
        totalButton.removeAttribute('disabled');
    }
    else{
        formValid = false;
        totalInput.classList.remove("is-valid");
        totalInput.classList.add("is-invalid");
        totalButton.addAttribute('disabled');
    }
}
// Function to calculate tip amount and display the tip amount!
function totalBill() {
    var tip = parseFloat(tipAmount.value);
    var total = parseFloat(totalInput.value);
    var numd = parseInt(numDiners.value);
    var tipPerDiner = (total * tip)/numd;
    tipText.innerHTML = '$' + tipPerDiner.toFixed(2).toString();
}