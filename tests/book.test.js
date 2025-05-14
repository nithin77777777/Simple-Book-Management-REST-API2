const request = require('supertest');
const app = require('../app');
const { createBookService, deleteBookService } = require('../services/bookService');

describe('Books API', () => {
  beforeEach(() => {
    // Clear books array before each test
    require('../services/bookService').books = [];
  });

  describe('GET /books', () => {
    it('should return all books', async () => {
      // Add a test book
      createBookService({
        title: 'Test Book',
        author: 'Test Author',
        publishedYear: 2023
      });

      const res = await request(app).get('/books');
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBe(1);
    });
  });

  describe('POST /books', () => {
    it('should create a new book', async () => {
      const res = await request(app)
        .post('/books')
        .send({
          title: 'New Book',
          author: 'New Author',
          publishedYear: 2023
        });
      
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
    });
  });

  // Add more test cases for other endpoints
});