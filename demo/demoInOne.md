---
layout: layouts/home.njk
title: JS Demo In One
eleventyNavigation:
  key: All js exercises
  order: 1
---
<script> 
function putOnCoat(temperature){
    let sentence = '';
    if (temperature < 50) {
        sentence += 'Put on a coat '
    } else {
        'Pants and vest are fine'
    }
    if (temperature < 30) {
        sentence += 'and a hat'
    }
    if (temperature < 0) {
        sentence = 'Stay inside'
    }
    if (sentence == '') {
        sentence = 'Pants and vest are fine'
    }
  document.getElementById("demo").innerHTML = sentence
}
</script>
<h1>Javascript Exercises</h1>
<h2>Shall I put on a coat?</h2>
<p>What is the temperature?</p>
<input type="text" id="temperature" placeholder="enter a temperature" oninput="putOnCoat(this.value)">
<p id="demo"></p>
<h2>First and Last name</h2>
<p>chg13-14-firstLastname.js</p>
<script> //Display Full Name

/* Challenge 13
Write a simple program to combine a first name and a last name inside a function.
Then update the function to accept a first and last name as arguments.
*/


function displayFullName(fName, lName) {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    
/* Challenge 14
Add a return statement to your 'name' function. Use that function to set the value of a variable.
*/
    return (document.getElementById(
      "fullNameDisplay"
    ).innerHTML = `${fName} ${lName}`);
  }
  </script>