// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

const flecheGauche = document.querySelector(".arrow-left");
flecheGauche.addEventListener('click', function(){
	console.log('gauche');
});



// flecheGauche.addEventListener("click", function () {ChangeSlide (-1);
// 	console.log('gauche');
// });





// let numero = 0;
 
// const flecheGauche = document.querySelector("arrow-left");
// flecheGauche.addEventListener("click", function () {ChangeSlide (-1);
// 	console.log('gauche');
// });
// console.log(flecheGauche);

// const flecheDroite = document.querySelector("arrow-right");
// flecheDroite.addEventListener("click", function () {ChangeSlide (1);
// 	console.log('droite');

// });
// console.log(flecheDroite);

// function ChangeSlide(sens) {
// 	numero = numero + sens;
// 	if (numero > slides.length -1)
// 	numero = 0;
// 	if (numero < 0)
// 	numero = slides.length -1;
// 	console.log(numero + sens)

// 	document.querySelector(".banner-img").src = './assets/images/slideshow' + slides + [numero] ['image'];
// 	document.getElementById("text").innerHTML = slides [numero] ['tagLine']  
// }