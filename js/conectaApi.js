async function listarVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarVideos(titulo, descricao, url, imagem){
    //estrutura de uma função assíncrona, que faz uma conexão com a API 
    const conexao = await fetch('http://localhost:3000/videos', {
        //e cria uma requisição POST,
        method:"POST",
        headers:{ "Content-type":"application/json"},
        body: JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil visualizações`,
            url: url,
            imagem:imagem})
    })
    //que é a de cadastrar novas coisas lá na nossa API, no nosso db.json
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listarVideos,
    criarVideos
}