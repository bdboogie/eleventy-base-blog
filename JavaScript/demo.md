---
layout: layouts/home.njk
title: JS Demo
eleventyNavigation:
  key: Javascript Exercises
  order: 2
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