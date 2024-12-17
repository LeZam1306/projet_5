const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



//Create dot in dots div
let dotsContainer = document.querySelector(".dots");
//dot generator
let dot = `<div class="dot"></div>`;
for (let i= 0; i < slides.length; i++){
	dotsContainer.innerHTML += dot;
}
//dot list for atribute selected class att the first dot
let dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

//Left and right arrow button
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
//add event listener to both arrows
arrowLeft.addEventListener("click", () => {
	let image = document.querySelector(".banner-img");
	let textImage = document.querySelector(".banner-img + p");
	for (let i = 0; i < dots.length; i++){
		if (dots[i].classList.contains("dot_selected")){
			if (i == 0){
				dots[i].classList.remove("dot_selected");
				i = dots.length;
			}else{
				dots[i].classList.remove("dot_selected");
			}
			//change dot select position
			dots[i-1].classList.add("dot_selected");
			//change image
			image.src = `./assets/images/slideshow/${slides[i-1].image}`;
			//change text
			textImage.innerHTML = slides[i-1].tagLine;
			break;
		}
	} 
})
arrowRight.addEventListener("click", () => {
	let image = document.querySelector(".banner-img");
	let textImage = document.querySelector(".banner-img + p");
	for (let i = 0; i < dots.length; i++){
		if (dots[i].classList.contains("dot_selected")){
			if (i == dots.length-1){
				dots[i].classList.remove("dot_selected");
				i = -1;
			}else{
				dots[i].classList.remove("dot_selected");
			}
			//change dot select position
			dots[i+1].classList.add("dot_selected");
			//change image
			image.src = `./assets/images/slideshow/${slides[i+1].image}`;
			//change text
			textImage.innerHTML = slides[i+1].tagLine;
			break;
		}
	} 
})