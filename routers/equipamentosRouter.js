const express = require("express");
const router = express.Router();
const equipamentosController = require("../controllers/equipamentosController");




router.get("/", async function (req, res, next) {
  try {
    let equipamentos = await equipamentosController.getAll();
    res.status(200).send({ equipamentos });
  } catch (e) {
    total;
    res.status(500).send("erro na solicitacao");
  }
});

router.get("/:id?", async function (req, res, next) {
  let id = req.params.id;

  try {
    let getId = await equipamentosController.getId(id);

    if (getId.length > 0) {
      res.status(200).send({ getId });
    } else {
      res.status(500).json("Não há dados");
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/insert", async function (req, res, next) {
  try {
    let { numeracao, descricao, marca, modelo, id_organizacao, id_secao } =
      req.body;
    let insertDados = await equipamentosController.insertDados(req.body);

    return res.status(200).send({ message: "inserido com sucesso" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete/:id", async function (req, res, next) {
  let id = req.params.id;
  try {
    let deleteId = await equipamentosController.deleteId(id);
    if (deleteId) {
      res.status(200).json(`Equipamento ${id}, deletado com sucesso!!!`);
    }
  } catch (e) {
    console.log(e);
  }
});

router.put("/put/:id?", async function (req, res, next) {
  let id = req.params.id;
  let body = req.body;
  try {
    let putId = await equipamentosController.putId(id, body);
    if (putId) {
      res.status(500).send({ message: "atualizado com sucesso!!!" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
