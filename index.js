const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/list', indexRouter);
=======
app.use('/site', indexRouter);
>>>>>>> d677d8ab424eb9aec565ccd2ce7aeb139b9ddf04

const port = 3000;

app.listen(port, () => console.log('listening on port ' + port));
