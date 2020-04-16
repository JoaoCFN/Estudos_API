// comunicação com a API total voice
const axios = require("axios");

async function start(){
    const sms = await axios({
        url: "https://api2.totalvoice.com.br/sms",
        method: "post",
        headers: {
            "Access-Token": "1dcbc36de3d737bbc0ada15f2a07c89b",           
        },
        // body da minha requisição
        data: {
            "numero_destino": "75988383174",
            "mensagem": "Salve mano. Esse é o teste do SMS"
        }
    })
    //pegar a resposta pelo console
    console.log(sms.data);
}

start();