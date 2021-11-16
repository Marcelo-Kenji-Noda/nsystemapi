const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Empresa = require('../models/Empresa');
Empresa.init(connection);

const Usuario = require('../models/Usuario');
Usuario.init(connection);

const Aluno = require('../models/Aluno');
Aluno.init(connection);

const Atividade = require('../models/Atividade');
Atividade.init(connection);

const Treino = require('../models/Treino');
Treino.init(connection);

const TreinoAtv = require('../models/TreinoAtv');
TreinoAtv.init(connection);

const TreinoAlu = require('../models/TreinoAlu');
TreinoAlu.init(connection);

const Anamnese = require('../models/Anamnese');
Anamnese.init(connection);

const ConsultaAtividades = require('../models/ConsultaAtividades');
ConsultaAtividades.init(connection);

module.exports = connection;