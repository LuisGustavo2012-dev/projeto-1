module.exports = (sequelize, Sequelize) => {
    return sequelize.define('categoria', {
        nome: { type: Sequelize.STRING, allowNull: false }
    });
};