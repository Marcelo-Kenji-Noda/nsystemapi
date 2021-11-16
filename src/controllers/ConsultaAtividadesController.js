const errDB = require('../common/_sendErrorsDB');
const ConsultaAtividades = require('../models/ConsultaAtividades')
const sequelize = require("sequelize");

module.exports = {
    async findMonthYear(req,res){
        const {EmpIdf, mes, ano} = req.body;
        const sql = `
            SELECT treino.EmpIdf ,treino.TreIdf,treino.TreData, treino.TreTitulo, treinoatv.TreAtvDesc
			FROM treino  
			LEFT JOIN treinoatv
			ON treino.EmpIdf = treinoatv.EmpIdf AND treino.TreIdf = treinoatv.TreIdf
			WHERE treino.EmpIdf = ${EmpIdf} AND MONTH(treino.TreData) = ${mes} AND YEAR(treino.TreData) = ${ano}
			ORDER BY treino.TreData;
        `;
        retorno = await ConsultaAtividades.sequelize.query(sql, {
            type: sequelize.QueryTypes.SELECT
        }).catch(function(err){
            return errDB(res,err);
        });

        var output = [];

        retorno.forEach(function(item) {
            var existing = output.filter(function(v, i) {
              return v.TreIdf == item.TreIdf;
            });
            if (existing.length) {
              var existingIndex = output.indexOf(existing[0]);
              output[existingIndex].TreAtvDesc = output[existingIndex].TreAtvDesc.concat(item.TreAtvDesc);
            } else {
              if (typeof item.TreAtvDesc == 'string')
                item.TreAtvDesc = [item.TreAtvDesc];
              output.push(item);
            }
          });

        return res.json(output);
    },
}