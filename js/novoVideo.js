/* import { varConectaApi } from "./conectaApi.js";
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

 */

import { varConectaApi } from "./conectaApi.js"; // Importa o objeto varConectaApi do arquivo conectaApi.js

const formulario = document.querySelector('[data-formulario]'); // Seleciona o formulário usando o atributo data-formulario

// Função que coleta os dados do formulário
function coletarDados() {
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    return { titulo, descricao, url, imagem };
}

// Função assíncrona que chama criarVideos e lida com o redirecionamento
async function novoVideo(evento) {
    evento.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

    const { titulo, descricao, url, imagem } = coletarDados(); // Coleta os dados do formulário

    try {
        await varConectaApi.criarVideos(titulo, descricao, url, imagem); // Chama a função criarVideos com os dados coletados
        window.location.href = "../pages/envio-concluido.html"; // Redireciona para a página de conclusão
    } catch (error) {
        console.error("Erro ao criar vídeo:", error); // Exibe uma mensagem de erro no console
    }
}

// Adiciona um ouvinte de eventos ao formulário para lidar com o envio
formulario.addEventListener("submit", novoVideo);