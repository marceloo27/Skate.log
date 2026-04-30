var database = require("../database/config");

function buscarPorId(idSessao) {
  var instrucaoSql = `SELECT * FROM registro_manobra WHERE fkSessao = '${idSessao}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idRegistro, fkSessao, fkManobra  FROM registro_manobra`;

  return database.executar(instrucaoSql);
}

// function buscarPorCnpj(cnpj) {
//   var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

//   return database.executar(instrucaoSql);
// }

function cadastrar(idUsuario, idManobra) {
  var instrucaoSql = `INSERT INTO registro_manobra (fkSessao, fkManobra) VALUES ((SELECT idSessao FROM sessao WHERE fkUsuario = ${idUsuario} ORDER BY idSessao DESC LIMIT 1), '${idManobra}')`;

  return database.executar(instrucaoSql);
}

module.exports = {
  //  buscarPorCnpj,
   buscarPorId, cadastrar, listar };