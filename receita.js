module.exports = (sequelize, Sequelize) => {
    return sequelize.define('receita', {
        nome: { type: Sequelize.STRING, allowNull: false },
        descricao: { type: Sequelize.TEXT, allowNull: false },
        link_externo: { type: Sequelize.STRING }
    });
};