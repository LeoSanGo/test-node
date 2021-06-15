const express = require('express');

const home = (req, res) => {
  res.send('Teste Node route / controller');
};

module.exports = {
  home,
};
