import express, { request } from 'express'

const app = express()
app.use(express.json())
// Essa linha garante que eu estou usando json, ele foi usado la no meu local host, onde eu coloquei um nome, idade e email

const users = []
app.post('/usuarios',(req, res)=>{

    users.push(req.body)
    // aqui eu estou salvando os meu usuários
    

    // console.log(req.body) aqui eu mostro os dados de uma forma mais facil
    res.status(201).json(req.body)
    // deu serto e criou oq foi pedido

})

// essa rota vai me devolver usuários
// requisição e resposta
app.get('/usuarios', (req, res) =>{
    res.status(200).json(users)
    //  aqui eu estou mostrando os meus usuários, ele está no formato json, pq as infos foram salvas no formato json

})

// porta em que o servidor vai rodar
app.listen(3000)

// app.delete('/usuarios')
// app.put('/usuarios')

// 1) tipo de rota/ método HTTP
// 2) endereço  / www.
// 