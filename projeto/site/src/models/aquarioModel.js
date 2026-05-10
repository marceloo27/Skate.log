  var database = require("../database/config");

  function buscarSessoes(idUsuario) {

    var instrucaoSql = `SELECT tempoMinutos, diaSemana, DATE_FORMAT(dtSessao, '%d/%m') as dtSessao FROM sessao WHERE fkUsuario = ${idUsuario} order by idSessao desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function cadastrar(idUsuario, tempo, diaSemana) {
    
    var instrucaoSql = `INSERT INTO sessao (fkUsuario, tempoMinutos, diaSemana) VALUES (${idUsuario}, ${tempo}, '${diaSemana}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }


  module.exports = {
    buscarSessoes,
    cadastrar
  }