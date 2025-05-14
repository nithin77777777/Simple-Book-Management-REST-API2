# Book Management API

A Node.js REST API for managing books with CRUD operations and CSV import functionality.

## Features
- Create, Read, Update, Delete books
- Bulk import from CSV
- Error handling middleware
- Request logging

## Setup Instructions
Testing the API

You can test the API using:
Postman
Download and install Postman.
Import the Postman collection file available in the repository (postman/
BookManagementAPI.postman_collection.json).

##Project Structure:
 book-management-api/
├── controllers/
│ └── bookController.js # Handles route logic
├── middleware/
│ └── errorHandler.js # Central error handling
├── node_modules/ # Dependencies (auto-generated)
├── postman/
│ └── BookManagementAPI_postman_collection.json # Postman tests
├── routes/
│ └── bookRoutes.js # API endpoint definitions
├── services/
│ └── bookService.js # Business logic
├── test-data/
│ ├── new-book.json # Sample POST payload
│ ├── sample-book.csv # CSV import template
│ └── update-book.json # Sample PUT payload
├── tests/
│ └── book.test.js # Jest unit tests
├── app.js # Main application
└── package.json # Project config

## 🚀 Setup Guide
 ## 🚀 Setup Guide

1. **Install dependencies**:
   ```bash
   npm install

### 2. Clone the repository
```bash
git clone  https://github.com/nithin77777777/Simple-Book-Management-REST-API2.git
cd book-management-api
