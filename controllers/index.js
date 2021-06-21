const express = require('express');

const home = (req, res) => {
  res.send('Teste Node route / controller');
};

<<<<<<< HEAD
const list = (req, res) => {
  res.send(
    JSON.stringify({
      nome: 'João',
      profissão: 'Programador',
      idade: 18,
      notas: [1, 2, 3, 4],
    })
  );
=======
const site = (req, res) => {
  res.send(JSON.stringify({ site: 'Nova rota' }));
>>>>>>> d677d8ab424eb9aec565ccd2ce7aeb139b9ddf04
};

module.exports = {
  home,
<<<<<<< HEAD
  list,
=======
  site,
>>>>>>> d677d8ab424eb9aec565ccd2ce7aeb139b9ddf04
};
