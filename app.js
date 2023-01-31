const express = require("express");
const app = express();
const PORT = process.env.PORT || 1000;
const equipamentosRouter = require("./routers/equipamentosRouter");
const pool = require("./database/database");
const bodyParser = require("body-parser");
const { builtinModules } = require("module");
const loginRouter = require("./routers/loginRouter");
const bcrypt = require("bcrypt");
const loginController = require("./controllers/loginController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", loginRouter);
app.use("/equipamentos", equipamentosRouter);

app.use((req, res, next) => {
  const erro = new Error("◘Não encontrado◘");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

app.listen(PORT, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("conectado a porta:", PORT);
  }
});

///aula 12 token
