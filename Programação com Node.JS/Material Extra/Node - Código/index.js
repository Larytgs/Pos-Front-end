const express = require('express')
const app = express()
const {leitura, escrita} = require('./fileSytem')
const {pegaHorarioAtual} = require('./function');

app.get('/', async function (req, res) {
  const horarioAtual = pegaHorarioAtual();
  const mensagem = `\nPessoa X acessou a rota / - ${horarioAtual}`;
  await escrita('./log.txt', mensagem);

  const dados = await leitura('./teste.txt')
  res.send(dados)
})

app.get('/contato', async function (req, res) {
  const mensagem = "\nPessoa X acessou a rota /contato";
  await escrita('./log.txt', mensagem);
  res.send('Rota de contatos')
})

app.listen(3000)