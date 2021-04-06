function percentageCalculator(num, per) {
    var num = parseInt(
      document.getElementById("percentageCalculatorNumber").value
    );
    var per = parseInt(
      document.getElementById("percentageCalculatorPercent").value
    );
    return (document.getElementById("percentageResult").innerHTML =
      (num / 100) * per);
  }