module.exports = (sequelize, Sequelize) => {
    return sequelize.define('aluno', {
        nome: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false, unique: true },
        senha: { type: Sequelize.STRING, allowNull: false }
    });
};