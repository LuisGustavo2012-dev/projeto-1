module.exports = (sequelize, Sequelize) => {
    return sequelize.define('aluno_habilidade', {
        nivel: { type: Sequelize.INTEGER, validate: { min: 0, max: 10 } }
    });
};