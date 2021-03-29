/* Attempt 1
function tipCalc() {
    var totalAmount = 67.56;
    var tipPercent = 20;
    var tipAmount = (totalAmount * tipPercent / 100);
    document.getElementById('tipText').innerHTML = 
    `Your total bill, including tip comes to £${(totalAmount + tipAmount).toFixed(2)}` +
    `. The tip amount was £${tipAmount.toFixed(2)}`;
Other example
    function bill(whatIsMyBill) {
    let totalBill = 50;
    let tipPercent = 15;
    let tip = (totalBill / 100) * tipPercent;
    let totalBillWithTip = totalBill + tip; 
 document.getElementById("myBill").innerHTML = totalBillWithTip;
}
document.write(totalBillWithTip);

<h2>Tip Calculator</h2>
<h4>Your bill is £50</h4>
<p>Your bill total with 15% tip is?</p>
<input type="text" id="Number" placeholder="enter your bill" oninput="bill(this.value)">
<p id="myBill"></p>
};
*/
/*Attempt 2 tidyied up*/
function tipCalculator() {
    var billAmount = parseInt(document.getElementById("billAmount").value);
    var tipPercentage = parseInt(
    document.getElementById("percentAmount").value
    ).toFixed(2);
    var tipPercentCalc = ((billAmount / 100) \* tipPercentage).toFixed(2);
    var totalBill = billAmount + tipPercentCalc;
    return (document.getElementById(
    "totalBillSentence"
    ).innerHTML = `Your bill of £${billAmount.toFixed( 2 )}, with a ${tipPercentage}% optional service charge of £${tipPercentCalc} , is a total bill of £${totalBill}`);
    }

    /*Attempt #3*/
    function tipCalculator() {
        var billAmount = parseInt(document.getElementById("billAmount").value);
      
        var tipPercentage = parseInt(document.getElementById("percentAmount").value);
      
        var tipPercentCalc = (billAmount / 100) * tipPercentage;
      
        var totalBill = billAmount + tipPercentCalc;
      
        return (document.getElementById(
          "totalBillSentence"
        ).innerHTML = `Your bill of £${billAmount.toFixed(
          2
        )}, with a ${tipPercentage}% optional sertvice charge of £${tipPercentCalc.toFixed(
          2
        )} , is a total bill of £${totalBill.toFixed(2)}`);
      }
    