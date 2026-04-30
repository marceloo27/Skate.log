var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {

  var instrucaoSql = `SELECT * FROM sessao WHERE fkUsuario = ${idUsuario} order by dtSessao desc`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, tempo, diaSemana) {
  
  var instrucaoSql = `INSERT INTO sessao (fkUsuario, tempoMinutos, diaSemana) VALUES (${idUsuario}, ${tempo}, '${diaSemana}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}