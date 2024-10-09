const fs = require('fs').promises;

async function leitura(caminho) {
  const dados = await fs.readFile(caminho, 'utf-8');
  return dados;
}

async function escrita(caminho, novoValor) {
  await fs.appendFile(caminho, novoValor, 'utf-8')
}

module.exports = {
  leitura,
  escrita
}
