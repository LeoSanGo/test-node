const express = require('express');

const home = (req, res) => {
  res.send('Teste Node route / controller');
};

const site = (req, res) => {
  res.send(JSON.stringify({ site: 'Nova rota' }));
};

module.exports = {
  home,
  site,
};
