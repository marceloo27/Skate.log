var database = require("../database/config");

function buscarPorId(idSessao) {
  var instrucaoSql = `SELECT * FROM registro_manobra WHERE fkSessao = '${idSessao}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idRegistro, fkSessao, fkManobra  FROM registro_manobra`;

  return database.executar(instrucaoSql);
}

function buscarMedidasManobras(idUsuario) {
    var instrucaoSql = `
        SELECT m.nome AS nomeManobra, SUM(rm.quantidadeManobra) AS qtd 
        FROM registro_manobra rm
        JOIN manobra m ON rm.fkManobra = m.idManobra
        JOIN sessao s ON rm.fkSessao = s.idSessao
        WHERE s.fkUsuario = ${idUsuario}
        GROUP BY m.nome;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarPorCnpj(cnpj) {
//   var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

//   return database.executar(instrucaoSql);
// }

function cadastrar(idUsuario, idManobra, quantidade) {
    var instrucaoSql = `
        INSERT INTO registro_manobra (fkSessao, fkManobra, quantidadeManobra) 
        VALUES (
            (SELECT idSessao FROM sessao WHERE fkUsuario = ${idUsuario} ORDER BY idSessao DESC LIMIT 1), 
            ${idManobra}, 
            ${quantidade}
        );
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
  //  buscarPorCnpj,
   buscarMedidasManobras, buscarPorId, cadastrar, listar };