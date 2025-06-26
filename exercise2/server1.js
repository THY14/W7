const sequelize = require("../models");
const Author = require("../models/author");
const Book = require("../models/book");

async function start() {
  await sequelize.sync({ force: true }); 

  // Create Authors & Books
  const ronan = await Author.create({ name: "Ronan The Best", birthYear: 1990 });
  await ronan.createBook({ title: "Rise of Ronan", publicationYear: 2010, pages: 300 });
  await ronan.createBook({ title: "Fall of Ronan", publicationYear: 2015, pages: 250 });                        

  const kim = await Author.create({ name: "Kim Ang", birthYear: 1995 });
  await kim.createBook({ title: "Ang’s Journey", publicationYear: 2018, pages: 270 });
  await kim.createBook({ title: "Ang’s Future", publicationYear: 2022, pages: 310 });

  const hok = await Author.create({ name: "Hok Tim", birthYear: 2015 });
  await hok.createBook({ title: "Baby Steps", publicationYear: 2021, pages: 120 });
  await hok.createBook({ title: "Tim’s Time", publicationYear: 2023, pages: 200 });

  const muy = await Author.create({ name: "Methy Muy", birthYear: 2005 });
  await muy.createBook({ title: "How to train your dragon", publicationYear: 2024, pages: 123 });
  await muy.createBook({ title: "war 111", publicationYear: 2025, pages: 204 });

  // Fetch all books by Methy
  const thyBooks = await Author.findOne({ where: { name: "Methy Muy" }, include: Book });
  console.log("Methy's Books:", thyBooks.Books.map(b => b.title));

   // Fetch all books by Kim ang
  const kimBooks = await Author.findOne({ where: { name: "Kim Ang" }, include: Book });
  console.log("Kim Ang's Books:", kimBooks.Books.map(b => b.title));

  // Add new book for Hok Tim
  await hok.createBook({ title: "Tim's Final", publicationYear: 2025, pages: 220 });

  // List all authors with their books
  const all = await Author.findAll({ include: Book });
  all.forEach(author => {
    console.log(`${author.name} has books:`);
    author.Books.forEach(book => {
      console.log(`  - ${book.title} (${book.publicationYear})`);
    });
  });
}

start();
