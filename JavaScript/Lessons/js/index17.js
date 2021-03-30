const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const textSearch = document.getElementById("seachText");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        var animal = this.getAttribute("animal");
        //console.log(animal);
        typedValue - textSearch.value;
        let friendlyMessage = "You have typed " + typedValue + " and clicked on " + animal;

        for (let x = 0; x < images.length; x++) {
            if (animal === 'all') {
                images[x].style.display = "inline-block";
            }
            else {
                var imageAltText = images[x].getAttribute("alt");
                if (images[x].classList.contains(animal)) {
                    if (typedValue !=="") {
                        if (imageAltText != null && iimageAlyText.include(typedValue)) {
                            images[x].style.display = "none";
                        }
                    }
                    else { 
                        images[x].style.display = "inline-block";
                    }
                 }            
                else {
                    images[x].style.display ="none";
                }
             }
        }
    });
}