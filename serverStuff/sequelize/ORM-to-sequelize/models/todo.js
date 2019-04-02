
module.exports = function Todo(sequelize, DataTypes) {
 var Todo = sequelize.define("Todo", {
     text: DataTypes.STRING,
     complete: DataTypes.BOOLEAN
 });
    return Todo;
};