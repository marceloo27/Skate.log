var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var tempo = req.body.tempoServer;
  var dia = req.body.diaServer;
  var idUsuario = req.body.idUsuarioServer;

  if (tempo == undefined) {
    res.status(400).send("tempo está undefined!");
  } else if (dia == undefined) {
    res.status(400).send("dia está undefined!");
  } else if (idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  } {


    aquarioModel.cadastrar(idUsuario, tempo, dia)
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
  buscarAquariosPorEmpresa,
  cadastrar
}