var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;
  
  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var idManobra = req.body.idManobraServer;


  if (idUsuario == undefined) {
    res.status(400).send("O idSessao está undefined!");
  } else if (idManobra == undefined) {
    res.status(400).send("O idManobra está undefined!");
  } else {
   
     empresaModel.cadastrar(idUsuario, idManobra)
          .then((resultado) => {
            res.status(201).json(resultado);
          }
          ).catch((erro) => {
            console.log(erro);
            console.log(
              "\nHouve um erro ao realizar o cadastro! Erro: ",
              erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
          });
      }
    }

module.exports = {
  // buscarPorCnpj,
  // buscarPorId,
  cadastrar,
  // listar,
};