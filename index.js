const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.use('/site', indexRouter);
app.use('/nova', indexRouter)
app.use('/list', indexRouter);

const port = 3000;

app.listen(port, () => console.log('listening on port ' + port));
