const EquipamentosModel = require("../models/EquipamentosModel");

const equipamentosController = {
  putId: async function (id, body) {
    try {
      let putId = await EquipamentosModel.putId(id, body);
      return putId;
    } catch (e) {
      console.log(e);
    }
  },

  deleteId: async function (id) {
    try {
      let deleteId = await EquipamentosModel.deleteId(id);
      return deleteId;
    } catch (e) {
      console.log(e);
    }
  },
  insertDados: async function (dados) {
    try {
      let inseridos = await EquipamentosModel.insertDados(dados);
      console.log("inserido com sucesso");
    } catch (e) {
      console.log(e);
    }
  },
  getAll: async function () {
    try {
      const equipamentos = await EquipamentosModel.getAll();
      return equipamentos.rows;
    } catch (e) {
      console.log(e);
    }
  },
  getId: async function (id) {
    try {
      const getId = await EquipamentosModel.getId(id);
      return getId.rows;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = equipamentosController;
