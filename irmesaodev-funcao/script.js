function adicionarFilme(){
  var campoFilmeFavorito= document.querySelector('#filme')
  var filmeFavorito= campoFilmeFavorito.value 
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  }else {
    alert("Imagem inválida")
  }
   campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
        






  
const h4 = document.getElementById("filme");
h4.textContent= 'Nome do filme'