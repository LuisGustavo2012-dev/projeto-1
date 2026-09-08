const db = require('../config/db');
const Sequelize = require('sequelize');
const Aluno = require('../models/aluno')(db, Sequelize);
const Habilidade = require('../models/habilidade')(db, Sequelize);
const AlunoHabilidade = require('../models/alunoHabilidade')(db, Sequelize);

module.exports = {
    // Requisito 1.4 - Definir nível de habilidade
    async definirHabilidade(req, res) {
        const { alunoId, habilidadeId, nivel } = req.body;
        const aluno = await Aluno.findByPk(alunoId);
        await aluno.addHabilidade(habilidadeId, { through: { nivel } });
        res.send("Habilidade atualizada!");
    }
};