const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Link to your db.json file
const middlewares = jsonServer.defaults();

// Use CORS to allow cross-origin requests (if necessary)
server.use(cors());

// Use default middlewares (e.g., logger, static)
server.use(middlewares);
server.use(jsonServer.bodyParser); // ✅ ADD THIS LINE

// Custom routes (e.g., login endpoint)
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Search for the user in db.json
  const user = router.db.get('users').find({ username, password }).value();
  
  if (user) {
    // Successful login
    res.status(200).json({ message: 'Login successful', userId: user.id ,username: user.username});
  } else {
    // Invalid username or password
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Use the default router for other routes (CRUD operations for users)
server.use(router);

// Start the server on port 5000
server.listen(5001, () => {
  console.log('JSON Server is running on http://localhost:5001');
});