import Sistema, { NFTs, NFT, Usuario } from "../../dominio/Usuario.mjs"

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
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

$(document).ready(function(){
	// CARGA DE CLASES
	$(".userArticle").hide();
	$(".login").hide();
	const rootUser = new Usuario("Root", "Admin", "admin", 1234);
	for (let i = 100; i < 136; i++) {
		Nfts.addNFT(new NFT(i, i, images[i-100]))
	}
	// CARGA DE NFTs EN EL HTML
	for (let i = 0; i < 36; i++) {
		// var slides = document.getElementsByClassName("slides1")
		// slides.innerHTML = "";
		// var segundoDiv = document.createElement("div")
		// segundoDiv.setAttribute("class", "mdc-card fill-color($primary) my-card")
		if(i<10){
			//Crea card tendencia
			// var primerDiv = document.createElement("div")
			// primerDiv.setAttribute("class", "tendencia-"+i)
			// primerDiv.appendChild(segundoDiv);
			// slides.appendChild(primerDiv);
		} else if (i<19) {
			//Crea card arte
		} else if(i<28) {
			//Crea card deporte
		} else {

		}
	}
	// TERMINA LA CARGA
	$(".home").on("click", function(){
		$(".userArticle").hide();
		$(".login").hide();
		$(".hero").show();
	});
	$(".liked").on("click", function(){
		if(rootUser.online){
			showPerfil();
			$(".nombreP").text(rootUser.nombre + " " + rootUser.apellido)
			document.getElementsByClassName("slider favs").scrollIntoView({behavior: 'smooth'});
		} else {
			$(".login").show();
			$(".hero").hide();
			$(".btnLogin").on("click", function(){
				if(rootUser.login($("#inputUsername").val(),$("#inputPassword").val())){
					showPerfil();
					$(".nombreP").text(rootUser.nombre + " " + rootUser.apellido);
					document.getElementsByClassName("slider favs").scrollIntoView({behavior: 'smooth'});
				} else{
					snackbar.open();
				}
			})
		}
	});
	$(".user").on("click", function(){ //LO QUE SUCEDE CUANDO SE HACE CLICK EN EL ICONO DEL USUARIO
		$(".hero").hide();
		if(rootUser.online){
			showPerfil();
			$(".nombreP").text(rootUser.nombre + " " + rootUser.apellido)
		} else {
			$(".login").show();
			$(".hero").hide();
			$(".btnLogin").on("click", function(){
				if(rootUser.login($("#inputUsername").val(),$("#inputPassword").val())){
					showPerfil()
					$(".nombreP").text(rootUser.nombre + " " + rootUser.apellido)
				} else{
					snackbar.open();
				}
			})
		}
	});

	$(".compraButton").on("click", function(){
		let datos = Nfts.getListNft()
		var tend1 = document.getElementsByClassName("tend1")[0]
		tend1.style.backgroundImage = "url("+datos[4].getImage()+")"
	});
});

function showPerfil(){
	$(".userArticle").show();
	$(".login").hide();
	$(".hero").hide();
}


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
