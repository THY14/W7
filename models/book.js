const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Author = require("./author");

const Book = sequelize.define("Book", {
  title: DataTypes.STRING,
  publicationYear: DataTypes.INTEGER,
  pages: DataTypes.INTEGER,
});

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = Book;
