const pool = require("../database/database");

module.exports = class EquipamentosModel {
  static putId(id, body, callback) {
    return pool.query(
      "update  equipamentos.tab_equipamentos set numeracao = $1 , descricao = $2, marca = $3, modelo = $4, id_organizacao = $5, id_secao = $6, id_vinculo = $7 where numeracao = $8",
      [
        body.numeracao,
        body.descricao,
        body.marca,
        body.modelo,
        body.id_organizacao,
        body.id_secao,
        body.id_vinculo,
        id,
      ],
      callback
    );
  }

  static deleteId(id, callback) {
    return pool.query(
      "delete from equipamentos.tab_equipamentos where numeracao = $1",
      [id],
      callback
    );
  }
  static insertDados(body, callback) {
    return pool.query(
      "insert into equipamentos.tab_equipamentos(numeracao,descricao,marca,modelo,id_organizacao,id_secao,id_vinculo)values($1,$2,$3,$4,$5,$6,$7)",
      [
        body.numeracao,
        body.descricao,
        body.marca,
        body.modelo,
        body.id_organizacao,
        body.id_secao,
        body.id_vinculo,
      ],
      callback
    );
  }

  static getAll(callback) {
    return pool.query("select * from equipamentos.tab_equipamentos", callback);
  }
  static getId(id, callback) {
    return pool.query(
      "select * from equipamentos.tab_equipamentos  where  numeracao = $1",
      [id],
      callback
    );
  }
};
