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
  document.getElementById("response").innerHTML = sentence
}