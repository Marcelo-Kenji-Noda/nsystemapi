const express = require('express');

module.exports = function (server) {
    const api = express.Router();
    server.use('/api', api);

    const UsuarioController = require('../controllers/UsuarioController');
    api.post('/usuario/create', UsuarioController.create);
    api.post('/usuario/finduser', UsuarioController.finduser);
    api.post('/usuario/find', UsuarioController.find);
    api.post('/usuario/findall', UsuarioController.findall);
    api.post('/usuario/update', UsuarioController.update);
    api.post('/usuario/delete', UsuarioController.delete);

    const AlunoController = require('../controllers/AlunoController');
    api.post('/aluno/create', AlunoController.create);
    api.post('/aluno/findall', AlunoController.findall);
    api.post('/aluno/find', AlunoController.find);
    api.post('/aluno/update', AlunoController.update);
    api.post('/aluno/delete', AlunoController.delete);

    const AtividadeController = require('../controllers/AtividadeController');
    api.post('/atividade/create', AtividadeController.create);
    api.post('/atividade/findall', AtividadeController.findall);
    api.post('/atividade/find', AtividadeController.find);
    api.post('/atividade/update', AtividadeController.update);
    api.post('/atividade/delete', AtividadeController.delete);

    const TreinoController = require('../controllers/TreinoController');
    api.post('/treino/create', TreinoController.create);
    api.post('/treino/findall', TreinoController.findall);
    api.post('/treino/find', TreinoController.find);
    api.post('/treino/update', TreinoController.update);
    api.post('/treino/delete', TreinoController.delete);

    const TreinoAtvController = require('../controllers/TreinoAtvController');
    api.post('/treinoAtv/create', TreinoAtvController.create);
    api.post('/treinoAtv/findall', TreinoAtvController.findall);
    api.post('/treinoAtv/findallordem', TreinoAtvController.findallordem);
    api.post('/treinoAtv/find', TreinoAtvController.find);
    api.post('/treinoAtv/update', TreinoAtvController.update);
    api.post('/treinoAtv/delete', TreinoAtvController.delete);

    const TreinoAluController = require('../controllers/TreinoAluController');
    api.post('/treinoalu/create', TreinoAluController.create);
    api.post('/treinoalu/findall', TreinoAluController.findall);
    api.post('/treinoalu/find', TreinoAluController.find);
    api.post('/treinoalu/update', TreinoAluController.update);
    api.post('/treinoalu/delete', TreinoAluController.delete);

    const AnamneseController = require('../controllers/AnamneseController');
    api.post('/anamnese/create', AnamneseController.create);
    api.post('/anamnese/findall', AnamneseController.findall);
    api.post('/anamnese/find', AnamneseController.find);
    api.post('/anamnese/findlast', AnamneseController.findlast);
    api.post('/anamnese/update', AnamneseController.update);
    api.post('/anamnese/delete', AnamneseController.delete);
    api.post('/anamnese/has', AnamneseController.has);

    const ConsultaAtividadesController = require('../controllers/ConsultaAtividadesController');
    api.post('/consulta/findmonthyear', ConsultaAtividadesController.findMonthYear);
    /*
    /*
    * API Públicas - rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const TesteController = require('../controllers/TesteController');
    openApi.get('/teste', TesteController.teste);

    
}

