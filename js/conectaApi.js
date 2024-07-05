async function listarVideos(){
    const conexao = await fetch('https://json-server-vercel-git-main-roberta-santanas-projects.vercel.app/videos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarVideos(titulo, descricao, url, imagem){
    //estrutura de uma função assíncrona, que faz uma conexão com a API 
    const conexao = await fetch('https://json-server-vercel-git-main-roberta-santanas-projects.vercel.app/videos', {
        //e cria uma requisição POST,
        method:"POST",
        headers:{ "Content-type":"application/json"},
        body: JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil visualizações`,
            url: url,
            imagem:imagem})
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo!")
    }
    //que é a de cadastrar novas coisas lá na nossa API, no nosso db.json
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscarVideos(termoDeBusca){
    const conexao = await fetch(`https://json-server-vercel-git-main-roberta-santanas-projects.vercel.app/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const varConectaApi = {
    listarVideos,
    criarVideos,
    buscarVideos
}