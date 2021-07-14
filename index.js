const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/site', indexRouter);
app.use('/nova', indexRouter)
=======
app.use('/list', indexRouter);
>>>>>>> 9ac5d0a55a82dd633c826547bfdd476a9e24f0a3

const port = 3000;

app.listen(port, () => console.log('listening on port ' + port));
