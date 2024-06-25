import { varConectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await varConectaApi.buscarVideos(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', evento => buscaVideo(evento));

/* import { varConectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

async function buscaVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await varConectaApi.buscarVideos(dadosDePesquisa);

    console.log(busca);
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao,elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', evento=>buscaVideo(evento)); */


/* //AINDA SEM CONSEGUIR - A LISTA NÃO ESTÁ APAGANDO
import { varConectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

console.log(varConectaApi); // Log de depuração
console.log(constroiCard);  // Log de depuração

async function buscaVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
console.log(dadosDePesquisa); // Log de depuração

    const busca = await varConectaApi.buscarVideos(dadosDePesquisa);
    console.log("Resultado da busca:", busca);

    const lista = document.querySelector('[data-lista]');
    console.log("Elemento lista:", lista); // Verificar se o elemento foi encontrado
    console.log("Filhos de lista antes da remoção:", lista.childNodes); // Verificar os filhos antes da remoção

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
        console.log(lista)
    }
    console.log("Filhos de lista após a remoção:", lista.childNodes);

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
        console.log(busca)
        console.log(lista)
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento)); */
