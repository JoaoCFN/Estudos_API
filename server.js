// chamada ao express
const express = require("express");
// instâncio o o express na var app
const app = express();

// chamo os dados do data JSON
const data = require("./data.json");

// usar a notação JSON
app.use(express.json());

// VERBOS HTTP

// GET: Recebe os dados de um resource
// pega todos os clientes
app.get("/clientes", function(req, res){
    // resposta em formato json
    res.json(data);
});
// pega um cliente específico
app.get("/clientes/:id", function(req, res){
    // pego o id do cliente do parâmetro com o req.params
    const { id } = req.params;
    // ele busca no JSON com o método find o id do cliente
    const cliente = data.find(client => client.id == id);
    
    // se o clente não existir precisamos retorna algum erro legível para quem está consumindo nossa API
    if (!cliente){
        return res.status(204).json();
    }
    // responde um JSON com essa var
    res.json(cliente);
});

// POST: Envia dados ou informações para serem processados por um resource
// adiciona um novo cliente
app.post("/clientes", function(req, res){
    // pega nome e email
    const {nome, email, idade} = req.body;
    // cria o objeto novo cliente
    const novo_cliente = {  
        id: data.length + 1,
        nome: nome,
        email: email,
        idade: idade    
    }
    // adiciona no JSON data
    data.push(novo_cliente);
    // mostra o resultado
    res.json(data);
});

// PUT: Atualiza os dados de um resource
// atualiza os dados de um cliente específico
app.put("/clientes/:id", function(req, res){
    // pego o id do cliente do parâmetro com o req.params
    const { id } = req.params;
    // ele busca no JSON com o método find o id do cliente
    const cliente = data.find(client => client.id == id);

    // se o clente não existir precisamos retorna algum erro legível para quem está consumindo nossa API
    if(!cliente){
        return res.status(204).json();
    }

    // pega o nome e o email
    const { nome, email, idade } = req.body;
    cliente.nome = nome;
    cliente.email = email;
    cliente.idade = idade

    // resposta
    res.json(cliente);

});

// DELETE: Deleta um resource
// deleta um cliente existente
app.delete("/clientes/:id", function(req, res){
    // pego o id do cliente do parâmetro com o req.params
    const { id } = req.params;
    // find retorna o objeto com o indice igual ao passado como parâmetro
    const cliente = data.find(client => client.id == id);

    // se o clente não existir precisamos retorna algum erro legível para quem está consumindo nossa API
    if(!cliente){
        return res.status(204).json();
    }

    // pesquisa o objeto cliente dentro no array data e retorna a posição do mesmo para remover
    let indice_remover = data.indexOf(cliente);   
    // nesse caso, o splice remove 1 item do array a partir do primeiro indice passado  
    data.splice(indice_remover, 1);
    // resposta
    res.json(data);
      
});

// inicio o server na porta 3000 e recebo uma função de callback
app.listen(3000, function(){
    console.log("O servidor iniciou");
});

// TIPOS DE RESPOSTAS API

// 1xx: Informação
// 2xx: Sucesso
//     200: OK
//     201: CREATED
//     204: Não tem conteúdo PUT POST DELETE
// 3xx: Redirection
// 4xx: Client Error
//     400: Bad Request
//     404: Not Found!
// 5xx: Server Error 500: Internal Server Error
// 500: Internal Server Error
