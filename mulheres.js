const express = require("express")
const router = express.Router()
const app = express()

const porta = 3333
const mulheres = [
    {
        nome: 'Samara Pellegro',
        imagem: 'https://github.com/account',
        minibio: 'Amarelo diferente de azul'
    },
    {
        nome: 'Mariana Chan',
        imagem: 'https://github.com/account',
        minibio: 'Amaralina Buarque'
    },
    {
        nome: 'Pandora Hades',
        imagem: 'https://github.com/account',
        minibio: 'Comemos tudo o que vemos pela frente, amamos as meias da mamãe'
    }

]


function mostraMulheres(request,  response) {
response.json(mulheres)
}
function mostraPorta () {

    console.log ("Servidor criado e rodando na porta" , porta)
}
app.use(router.get('/mulheres',  mostraMulheres))
app.listen (porta, mostraPorta)