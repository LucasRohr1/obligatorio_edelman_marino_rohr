class ListaDeElementos{ //Se crean los elementos
  constructor(){
    this.lista=[];
  }
  agregar(elemento){
      this.lista.push(elemento);
  }
  valores(){
      return this.lista;
  }
}

class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.setNfts();
    this.setFavorites();
  }

  setNfts() {
    let nfts = []
  }
  setFavorites(){
    let favorites = []
  }
}
