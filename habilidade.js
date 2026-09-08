module.exports = (sequelize, Sequelize) => {
    return sequelize.define('habilidade', {
        nome: { type: Sequelize.STRING, allowNull: false }
    });
};