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


//AINDA SEM CONSEGUIR - A LISTA NÃO ESTÁ APAGANDO
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

    const listaHtml = document.querySelector('[data-lista]');
    console.log("Elemento lista:", listaHtml); // Verificar se o elemento foi encontrado
    console.log("Filhos de lista antes da remoção:", listaHtml.childNodes); // Verificar os filhos antes da remoção

    while (listaHtml.firstChild) {
        listaHtml.removeChild(listaHtml.firstChild);
    }
    console.log("Filhos de lista após a remoção:", listaHtml.childNodes);

    busca.forEach(elemento => listaHtml.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
        console.log(busca)
        console.log(listaHtml)
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento))



/* /// --------- CHAT GPT
import { varConectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

console.log(varConectaApi); // Log de depuração
console.log(constroiCard);  // Log de depuração

async function buscaVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    console.log(dadosDePesquisa); // Log de depuração

    const busca = await varConectaApi.buscarVideos(dadosDePesquisa);
    console.log(busca); // Log de depuração

    const lista = document.querySelector("[data-lista]");
    console.log(lista); // Log de depuração

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
console.log(botaoDePesquisa); // Log de depuração

botaoDePesquisa.addEventListener('click', evento => buscaVideo(evento)); */