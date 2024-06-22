import { conectaApi } from "./conectaApi.js";

const listaHtml = document.querySelector('[data-lista]');

function constroiCard(titulo, descricao, url, imagem){ //cria outros itens da lista do index.html
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`;
    return video;
}

async function listarVideos(){ 
    //Acessa a conectaApi.js, pega a função listaVideos e retorna o valor da nossa API, do db.json via fetch; 
    const listaApi = await conectaApi.listarVideos();
    //para cada item da lista da nossa API, um item da lista do index.html deve ser criado
    listaApi.forEach(elemento => listaHtml.appendChild(//cada elemento que vai pra listaApi, é a criação de um elemento filho da listaHtml, onde( 
        //usando a função ConstroiCard(
        //cada item criado deve ter os atributos que já estão no db.json(colunas da tabela do banco- titulo, descrição, url, imagem)
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

listarVideos();