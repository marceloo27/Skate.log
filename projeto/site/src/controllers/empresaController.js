var empresaModel = require("../models/empresaModel");

// function buscarPorCnpj(req, res) {
//   var cnpj = req.query.cnpj;
  
//   empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

function buscarMedidasManobras(req, res) {
    var idUsuario = req.params.idUsuario; 

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {
        empresaModel.buscarMedidasManobras(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar as manobras: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

// function listar(req, res) {
//   empresaModel.listar().then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

// function buscarPorId(req, res) {
//   var id = req.params.id;

//   empresaModel.buscarPorId(id).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

function cadastrar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var idManobra = req.body.idManobraServer;
  var quantidade = req.body.quantidadeServer;


  if (idUsuario == undefined) {
    res.status(400).send("O idSessao está undefined!");
  } else if (idManobra == undefined) {
    res.status(400).send("O idManobra está undefined!");
  } else if (quantidade == undefined) {
    res.status(400).send("A quantidade está undefined!");
  }else {
   
     empresaModel.cadastrar(idUsuario, idManobra, quantidade)
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
  buscarMedidasManobras,
  // buscarPorId,
  cadastrar,
  // listar,
};