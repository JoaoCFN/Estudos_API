// comunicação com a API total voice
const axios = require("axios");

async function start(){
    const sms = await axios({
        url: "https://api2.totalvoice.com.br/sms",
        method: "post",
        headers: {
            "Access-Token": "286e19ab26a5a7aa662c2e0dd9c2c156",           
        },
        // body da minha requisição
        data: {
            "numero_destino": "75988383174",
            "mensagem": "Teste de mensagem sms"
        }
    })
    //pegar a resposta pelo console
    console.log(sms.data);
}

start();