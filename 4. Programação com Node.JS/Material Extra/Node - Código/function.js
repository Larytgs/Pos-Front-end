function soma(a, b) {
  return a + b
}

function subtracao(a, b) {
  return a - b
}

function pegaHorarioAtual() {
  const data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();
  return `${hora}:${minutos}:${segundos}`
}

module.exports = {
  soma,
  subtracao,
  pegaHorarioAtual
}