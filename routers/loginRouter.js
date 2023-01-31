const express = require("express");
const LoginModel = require("../models/loginModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../database/database");
const loginController = require("../controllers/loginController");
const jwt = require("jsonwebtoken");

router.get("/", function (req, res, next) {
  res.status(200).json({ message: "bem vindo!" });
});

router.post("/cadastro", function (req, res, next) {
  let { senha, email } = req.body;
  bcrypt.hash(senha, 10, function (errBcrypt, hash) {
    if (errBcrypt) {
      return res.status(500).send({ erro: errBcrypt });
    }
    pool.query(
      "insert into equipamentos.tab_usuarios(email,senha)values($1,$2)",
      [email, hash],
      function (err, results) {
        if (err) {
          return res.status(500).send({ erro: err });
        }
        let response = {
          id_usuario: results.senha,
          mensagem: "usuário criado com sucesso",
          usuarioCriado: {
            email: email,
          },
        };
        return res.status(201).send({
          response,
        });
      }
    );
  }); // dificulta a senha
});

//com bcrypt
router.post("/login", function (req, res, next) {
  let { email, senha } = req.body;
  try {
    sql = "select * from equipamentos.tab_usuarios where email = $1";
    pool.query(sql, [email], function (err, results) {
      if (err) {
        res.status(404).send({ error: err });
      }
      if (results.rows.length < 1) {
        return res.status(401).send({ message: "Email não encontrado" });
      }

      bcrypt.compare(
        senha,
        results.rows[0].senha,
        function (err, results) {
          if (err) {
            return res.status(401).send({ message: "falaha na autenticacao" });
          }
          if (results) {
            const token = jwt.sign(
              {
                
                email: results.email,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).send({
   
              mensagen: "token com sucesso",
              token: token,
            });
          }

          if (results) {
            return res.status(200).send({ message: "Autenticado com sucesso" });
          }
          return res.status(401).send({ message: "falha na autenticacao" });
        }
      );
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
