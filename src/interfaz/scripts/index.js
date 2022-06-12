import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';
import * as $ from "jquery/dist/jquery.min"
import Usuario from '../../dominio/pelicula.mjs';

const usuario = new Usuario();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

$(document).ready(function(){
  $(".hamburger").on("click", function(){
    alert("Funciona")
  });
  $(".liked").on("click", function(){
    alert("liked nfts")
  });
  $(".user").on("click", function(){
    alert("user")
    usuario.agregar(new Usuario("Juan", "1234"));
    let datos = usuario.valores()
    alert(datos[0])
  });
});


// ESTO SALE DE PELICULAS:

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  try {
    let newPelicula = new Pelicula(title, genre, year);
    listaPeliculas.agregar(newPelicula);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
  }
})