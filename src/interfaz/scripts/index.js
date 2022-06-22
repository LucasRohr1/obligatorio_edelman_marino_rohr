import sistema, { NFTs, NFT, Usuario } from "../../dominio/Usuario.mjs"

import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import {MDCDialog} from '@material/dialog';

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

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
		//snackbar.open();
		//dialog.layout;
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
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

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

/*$(function() {

  $(".input input").focus(function() {

     $(this).parent(".input").each(function() {
        $("label", this).css({
           "line-height": "18px",
           "font-size": "18px",
           "font-weight": "100",
           "top": "0px"
        })
        $(".spin", this).css({
           "width": "100%"
        })
     });
  }).blur(function() {
     $(".spin").css({
        "width": "0px"
     })
     if ($(this).val() == "") {
        $(this).parent(".input").each(function() {
           $("label", this).css({
              "line-height": "60px",
              "font-size": "24px",
              "font-weight": "300",
              "top": "10px"
           })
        });

     }
  });

  $(".button").click(function(e) {
     var pX = e.pageX,
        pY = e.pageY,
        oX = parseInt($(this).offset().left),
        oY = parseInt($(this).offset().top);

     $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
     $('.x-' + oX + '.y-' + oY + '').animate({
        "width": "500px",
        "height": "500px",
        "top": "-250px",
        "left": "-250px",

     }, 600);
     $("button", this).addClass('active');
  })

  $(".alt-2").click(function() {
     if (!$(this).hasClass('material-button')) {
        $(".shape").css({
           "width": "100%",
           "height": "100%",
           "transform": "rotate(0deg)"
        })

        setTimeout(function() {
           $(".overbox").css({
              "overflow": "initial"
           })
        }, 600)

        $(this).animate({
           "width": "140px",
           "height": "140px"
        }, 500, function() {
           $(".box").removeClass("back");

           $(this).removeClass('active')
        });

        $(".overbox .title").fadeOut(300);
        $(".overbox .input").fadeOut(300);
        $(".overbox .button").fadeOut(300);

        $(".alt-2").addClass('material-buton');
     }

  })

  $(".material-button").click(function() {

     if ($(this).hasClass('material-button')) {
        setTimeout(function() {
           $(".overbox").css({
              "overflow": "hidden"
           })
           $(".box").addClass("back");
        }, 200)
        $(this).addClass('active').animate({
           "width": "700px",
           "height": "700px"
        });

        setTimeout(function() {
           $(".shape").css({
              "width": "50%",
              "height": "50%",
              "transform": "rotate(45deg)"
           })

           $(".overbox .title").fadeIn(300);
           $(".overbox .input").fadeIn(300);
           $(".overbox .button").fadeIn(300);
        }, 700)

        $(this).removeClass('material-button');

     }

     if ($(".alt-2").hasClass('material-buton')) {
        $(".alt-2").removeClass('material-buton');
        $(".alt-2").addClass('material-button');
     }

  });

});*/
