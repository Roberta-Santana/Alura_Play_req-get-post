import { varConectaApi } from "./conectaApi.js";
const formulario = document.querySelector('[data-formulario]');

async function novoVideo(evento){ //passando evento por parametro, 
    //prevent default p evitar recarregar a página após submit
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random()*10).toString();

    await varConectaApi.criarVideos(titulo,descricao,url,imagem);
    //enviar parãmetros na ordem da função do conect api

    window.location.href = "../pages/envio-concluido.html";
    //feeedback ao usuário se nada der erro
}

formulario.addEventListener("submit", evento => novoVideo(evento));



     
