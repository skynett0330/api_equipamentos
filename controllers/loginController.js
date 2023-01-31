const LoginModel = require("../models/loginModel");

const loginController = {
  getEmail: async function (body) {
    return new Promise((resolve,reject)=>{
      LoginModel.getEmail(body,function(err,results){
        if(err){
          reject(err)
        }else{
          return resolve(results.rows)
        }
      })
    })
 
  
  },
};

module.exports = loginController;
