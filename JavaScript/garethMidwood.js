<script type="text/javascript">
  // task 1
  function whatsThePercentage(percentage, theNumber) {
    var thePercentageOfTheNumber = percentage * theNumber/100;
    return thePercentageOfTheNumber;
  }
  console.log(whatsThePercentage(10, 100));
  console.log(whatsThePercentage(5, 20));
  console.log(whatsThePercentage(12, 740));
  function drinkOrder(size, drink) {
    switch(drink) {
      case 'cola':
        return outputDrinksOrder(size, 'cola');
        break;
      case 'lemon':
        return outputDrinksOrder(size, 'lemon');
        break;
      case 'orange':
        return outputDrinksOrder(size, 'orange');
        break;
    }
  }
  function outputDrinksOrder(size, drink) {
    switch(size) {
      case 'small':
        return 'You have ordered a small of ' + drink;
        break;
      case 'medium':
        return 'You have ordered a medium of ' + drink;
        break;
      case 'large':
        return 'You have ordered a large of ' + drink;
        break;
    }
  }
  console.log(drinkOrder('small','orange'));
  console.log(drinkOrder('medium','cola'));
  console.log(drinkOrder('large','lemon'));
  function calculator(number1, number2, operator) {
    switch(operator) {
      case '+':
        var result = number1 + number2;
        console.log(number1, operator, number2, '=', result);
        break;
      case '-':
        var result = number1 - number2;
        console.log(number1, operator, number2, '=', result);
        break;
      case '*':
        var result = number1 * number2;
        console.log(number1, operator, number2, '=', result);
        break;
      case '/':
        var result = number1 / number2;
        console.log(number1, operator, number2, '=', result);
        break;
      case '%':
        var result = number1 % number2;
        console.log(number1, operator, number2, '=', result);
        break;
    }
  }
  calculator(1, 2, '+');
  calculator(1, 2, '-');
  calculator(2, 2, '*');
  calculator(20, 2, '/');
  calculator(5, 2, '%');
  // alternative way to do the above, with console logging outside of the function
  function calculator2(number1, number2, operator) {
    switch(operator) {
      case '+':
        var result = number1 + number2;
        break;
      case '-':
        var result = number1 - number2;
        break;
      case '*':
        var result = number1 * number2;
        break;
      case '/':
        var result = number1 / number2;
        break;
      case '%':
        var result = number1 % number2;
        break;
    }
    return result;
  }
  console.log(calculator2(1, 2, '+'));
  console.log(calculator2(1, 2, '-'));
  console.log(calculator2(2, 2, '*'));
  console.log(calculator2(20, 2, '/'));
  console.log(calculator2(5, 2, '%'));
</script>