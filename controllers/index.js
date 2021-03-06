const express = require('express');

const home = (req, res) => {
  res.send('Teste Node route / controller');
};

const list = (req, res) => {
  res.send(
    JSON.stringify({
      nome: 'João',
      profissão: 'Programador',
      idade: 18,
      notas: [1, 2, 3, 4],
    })
  );
};



const novaRota = (req, res) => {
  res.send("Teste de nova rota - Nova rota");
};

module.exports = {
  home,
  novaRota,
  list,
};
