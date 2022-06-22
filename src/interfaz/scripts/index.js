import sistema, { NFTs, NFT, Usuario } from "../../dominio/Usuario.mjs"

import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';

import * as $ from "jquery/dist/jquery.min"

var usuario = new Usuario()
var Nfts = new NFTs()

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

$(document).ready(function(){
	$(".userArticle").hide();
	$(".login").hide();
	const rootUser = new Usuario("Root", "Admin", "admin", 1234);
	for (let i = 100; i < 136; i++) {
		Nfts.addNFT(new NFT(i, i, images[i-100]))
	}
	$(".home").on("click", function(){
		$(".userArticle").hide();
		$(".login").hide();
		$(".hero").show();
	});
	$(".liked").on("click", function(){
		alert("liked nfts")
	});
	$(".user").on("click", function(){
		$(".hero").hide();
		if(rootUser.online){
			$(".userArticle").show();
			$(".login").hide();
			$(".nombreP").text(rootUser.nombre + " " + rootUser.apellido)
		} else {
			$(".login").show();
			$(".hero").hide();
		}
	});
	$(".btnLogin").on("click", function(){
			$(".userArticle").show();
			$(".login").hide();
	})
	$(".compraButton").on("click", function(){
		let datos = sistema.getListNft()
		var tend1 = document.getElementsByClassName("tend1")[0]
		tend1.style.backgroundImage = "url("+datos.getImage()+")"
		alert("Hello")
	});
});

var images = [
	"../img/Tendencias/Tendencia1.jpg",
	"../img/Tendencias/Tendencia2.jpg",
	"../img/Tendencias/Tendencia3.jpg",
	"../img/Tendencias/Tendencia4.jpg",
	"../img/Tendencias/Tendencia5.jpg",
	"../img/Tendencias/Tendencia6.jpg",
	"../img/Tendencias/Tendencia7.jpg",
	"../img/Tendencias/Tendencia8.jpg",
	"../img/Tendencias/Tendencia9.jpg",
	"../img/Arte/A1.avif",
	"../img/Arte/A2.avif",
	"../img/Arte/A3.avif",
	"../img/Arte/A4.png",
	"../img/Arte/A5.jpg",
	"../img/Arte/A6.jpg",
	"../img/Arte/A7.jpg",
	"../img/Arte/A8.avif",
	"../img/Arte/A9.avif",
	"../img/Deporte/d1.jpg",
	"../img/Deporte/d2.jpg",
	"../img/Deporte/d3.jpg",
	"../img/Deporte/d4.jpg",
	"../img/Deporte/d5.jpg",
	"../img/Deporte/d6.jpg",
	"../img/Deporte/d7.jpg",
	"../img/Deporte/d8.jpg",
	"../img/Deporte/d9.jpg",
	"../img/GIFs/G1.gif",
	"../img/GIFs/g2.gif",
	"../img/GIFs/g3.gif",
	"../img/GIFs/g4.gif",
	"../img/GIFs/g5.gif",
	"../img/GIFs/g6.gif",
	"../img/GIFs/g7.gif",
	"../img/GIFs/g8.gif",
	"../img/GIFs/g9.gif",
]

// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);

// const buttonRipple = new MDCRipple(document.querySelector('.mcd-button'));

// buttonRipple.listen("material-icons mdc-top-app-bar__navigation-icon mdc-icon-button:activated", (activatedEventMenu) => {
// 	alert("Funciona")
// });

// topAppBar.listen("MDCtopAppBar:activated", (activatedEvent) => {
// 	alert("Funciona")
// });

// function myFunction(){
// 	alert("Hello")
// }

// tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
// 	document.querySelectorAll(".content").forEach((element, index) => {
// 		if (index === activatedEvent.detail.index) {
// 			element.classList.remove("sample-content--hidden");
// 		} else {
// 			element.classList.add("sample-content--hidden");
// 		}
// 	});
// });

// const textFieldTitle = new MDCTextField(document.getElementById('title'));
// const textFieldYear = new MDCTextField(document.getElementById('year'));
// const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   let title = textFieldTitle.value;
//   let year = textFieldYear.value;
//   let genre = selectGenre.value;
//   try {
//     let newPelicula = new Pelicula(title, genre, year);
//     listaPeliculas.agregar(newPelicula);
//   } catch (error) {
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = error.message;
//     snackbar.open();
//   } finally {
//     let peliculas = listaPeliculas.getPeliculas();
//     console.log(peliculas);
//   }
// })

//  INICIO SESION

