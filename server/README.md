# Express.js Server Basics

## Overview
This is a basic **Express.js server** setup demonstrating the fundamental concepts of creating a web server with Node.js and Express framework.

## Code Explanation

### Complete Server Code
```javascript
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```

## Line-by-Line Breakdown

### 1. Import Express Framework
```javascript
const express = require('express');
```
- **Purpose**: Imports the Express.js library
- **Syntax**: CommonJS `require()` syntax (Node.js standard)
- **What it returns**: Express function to create applications

### 2. Create Express Application
```javascript
const app = express();
```
- **Purpose**: Creates an Express application instance
- **What `app` is**: Main server object with methods for routing, middleware, etc.
- **Available methods**: `app.get()`, `app.post()`, `app.use()`, `app.listen()`

### 3. Define Server Port
```javascript
const port = 5000;
```
- **Purpose**: Specifies which port the server will listen on
- **Port 5000**: Common choice for development servers
- **Access URL**: `http://localhost:5000`

### 4. Define Route Handler
```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

#### Breaking Down the Route:
- **`app.get()`**: Handles HTTP GET requests
- **`'/'`**: Route path (root URL)
- **`(req, res) => {}`**: Callback function with two parameters:
  - `req`: Request object (incoming data from client)
  - `res`: Response object (methods to send data back)
- **`res.send()`**: Sends a response back to the client

### 5. Start the Server
```javascript
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```
- **`app.listen()`**: Starts the server on specified port
- **Callback function**: Runs when server successfully starts
- **Console output**: Confirms server is running

## Request-Response Flow

### How It Works:
```
1. Browser makes request: GET http://localhost:5000/
         ↓
2. Express receives request at '/' route
         ↓
3. Route handler executes: (req, res) => { res.send('Hello World!'); }
         ↓
4. Server sends "Hello World!" response
         ↓
5. Browser displays: Hello World!
```

### Visual Diagram:
```
Client (Browser)           Server (Express)
      |                          |
      |-- GET / ---------------->|
      |                          |-- Route Handler
      |                          |-- res.send('Hello World!')
      |<-- Hello World! ---------|
      |                          |
```

## Project Setup

### Prerequisites
- Node.js installed
- npm or yarn package manager

### Installation Steps

#### 1. Initialize Project
```bash
mkdir my-express-server
cd my-express-server
npm init -y
```

#### 2. Install Express
```bash
npm install express
```

#### 3. Create Server File
```bash
touch server.js
# Add the Express code to server.js
```

#### 4. Run the Server
```bash
node server.js
```

#### 5. Test the Server
- Open browser
- Navigate to: `http://localhost:5000`
- Should see: **Hello World!**

## Project Structure

### Basic Structure:
```
my-express-server/
├── server.js          # Main server file
├── package.json       # Project dependencies
└── node_modules/      # Installed packages
```

### Full-Stack Structure:
```
my-project/
├── client/            # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/            # Express backend
│   ├── server.js      # This server code
│   ├── package.json
│   └── node_modules/
└── README.md
```

## Key Concepts Demonstrated

### 1. **Server Creation**
- How to create a basic web server
- Setting up Express application instance

### 2. **Routing**
- Defining route handlers for different paths
- HTTP methods (GET in this example)

### 3. **Request/Response Objects**
- `req`: Contains request data (headers, params, body)
- `res`: Methods to send responses (send, json, status)

### 4. **Server Listening**
- Starting server on specific port
- Handling server startup events

## Expanding the Basic Server

### Add More Routes
```javascript
// API endpoints
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'iPhone 15' },
    { id: 2, name: 'Samsung Galaxy S24' }
  ]);
});
```

### Add Middleware
```javascript
// Parse JSON bodies
app.use(express.json());

// Enable CORS for frontend
const cors = require('cors');
app.use(cors());

// Static files
app.use(express.static('public'));
```

### Error Handling
```javascript
app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
```

## Common Development Workflow

### 1. Development Setup
```bash
# Terminal 1 - Backend
cd server
npm run dev          # or node server.js

# Terminal 2 - Frontend  
cd client
npm run dev          # React dev server
```

### 2. Typical Port Configuration
- **Frontend (React)**: `http://localhost:3000`
- **Backend (Express)**: `http://localhost:5000`
- React makes API calls to Express server

### 3. Environment Variables
```javascript
// server.js
const port = process.env.PORT || 5000;

// .env file
PORT=5000
NODE_ENV=development
```

## Testing the Server

### Using Browser
```
http://localhost:5000/           # Returns: Hello World!
http://localhost:5000/api/users  # Returns: JSON user data
```

### Using curl
```bash
curl http://localhost:5000/
curl http://localhost:5000/api/users
```

### Using Postman
- GET `http://localhost:5000/`
- GET `http://localhost:5000/api/users`

## Best Practices

### 1. **Environment Variables**
```javascript
require('dotenv').config();
const port = process.env.PORT || 5000;
```

### 2. **Error Handling**
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### 3. **Security**
```javascript
const helmet = require('helmet');
app.use(helmet());
```

### 4. **Logging**
```javascript
const morgan = require('morgan');
app.use(morgan('combined'));
```

## Next Steps

After understanding this basic server:

1. **Add more routes** for different endpoints
2. **Implement CRUD operations** (Create, Read, Update, Delete)
3. **Connect to a database** (MongoDB, PostgreSQL)
4. **Add authentication** (JWT, sessions)
5. **Implement validation** (input validation, error handling)
6. **Deploy to production** (Heroku, Vercel, AWS)

## Learning Outcomes

After working with this code, you understand:
- ✅ **Express.js basics** - Server creation and routing
- ✅ **HTTP methods** - GET requests and responses
- ✅ **Request/Response cycle** - How web servers work
- ✅ **Node.js modules** - CommonJS require syntax
- ✅ **Server listening** - Port configuration and startup
- ✅ **Full-stack foundation** - Backend ready for frontend integration

This basic Express server is the foundation for building **RESTful APIs** and **full-stack applications**! 🚀