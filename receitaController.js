const db = require('../config/db');
const Sequelize = require('sequelize');
const Receita = require('../models/receita')(db, Sequelize);
const Categoria = require('../models/categoria')(db, Sequelize);

module.exports = {
    // Requisito 1.7 - Listar todas (Público)
    async listarTodas(req, res) {
        const receitas = await Receita.findAll({ include: Categoria });
        res.json(receitas);
    },
    // Requisito 1.2 - Cadastro de Receita
    async cadastrar(req, res) {
        const { nome, descricao, link, categoriasIds } = req.body;
        const novaReceita = await Receita.create({ nome, descricao, link_externo: link });
        if (categoriasIds) await novaReceita.setCategoria(categoriasIds);
        res.send("Receita cadastrada!");
    }
};