import { extend } from "jquery";

export default class Sistema {

  constructor(){
    this.listaNFT = [];
    this.listaUsuarios = [];
  }

  addNFT(elemento){
    this.listaNFT.push(elemento)
  }

  addUser(elemento){
    this.listaUsuarios.push(elemento)
  }

  getListNft(){
    return this.listaNFT;
  }
}

export class Usuario {
  constructor(nombre, apellido, username, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.username = username;
    this.password = password;
    this.online = false;
  }

  toString(){
    return (this.nombre + this.apellido)
  }
}

export class NFT {

  constructor(id, nombre, img){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseInt(Math.random()*(1000 - 250) + 250);
    this.fav = false;
    this.img = img;
  }

  getImage(){
    return this.img;
  }

}

export class NFTs extends Sistema {
  constructor(){
    super();
  }
}