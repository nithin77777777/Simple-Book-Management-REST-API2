const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  importBooks
} = require('../controllers/bookController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/import', upload.single('csv'), importBooks);

module.exports = router;