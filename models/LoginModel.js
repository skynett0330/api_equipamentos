const pool = require("../database/database");

module.exports = class LoginModel {
  static getEmail(body, callback) {
    return pool.query(
      "select * from equipamentos.tab_usuarios where email = $1",
      [body.email],
      callback
    );
  }
};
