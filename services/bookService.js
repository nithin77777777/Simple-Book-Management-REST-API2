const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

let books = [];

const getAllBooksService = () => {
  return books;
};

const getBookByIdService = (id) => {
  return books.find(book => book.id === id);
};

const createBookService = (bookData) => {
  const newBook = {
    id: uuidv4(),
    title: bookData.title,
    author: bookData.author,
    publishedYear: bookData.publishedYear
  };
  books.push(newBook);
  return newBook;
};

const updateBookService = (id, updateData) => {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return null;
  
  books[index] = {
    ...books[index],
    ...updateData
  };
  return books[index];
};

const deleteBookService = (id) => {
  const initialLength = books.length;
  books = books.filter(book => book.id !== id);
  return books.length !== initialLength;
};

const importBooksService = (filePath) => {
  const csvData = fs.readFileSync(filePath, 'utf-8');
  const rows = csvData.split('\n').slice(1);
  const errors = [];
  let addedCount = 0;

  rows.forEach((row, index) => {
    const [title, author, publishedYear] = row.split(',');
    
    if (!title || !author || isNaN(publishedYear)) {
      errors.push(`Row ${index + 2}: Invalid data`);
      return;
    }
    
    books.push({
      id: uuidv4(),
      title: title.trim(),
      author: author.trim(),
      publishedYear: parseInt(publishedYear.trim())
    });
    addedCount++;
  });

  // Clean up the uploaded file
  fs.unlinkSync(filePath);

  return {
    addedBooksCount: addedCount,
    errorRows: errors
  };
};

module.exports = {
  getAllBooksService,
  getBookByIdService,
  createBookService,
  updateBookService,
  deleteBookService,
  importBooksService
};