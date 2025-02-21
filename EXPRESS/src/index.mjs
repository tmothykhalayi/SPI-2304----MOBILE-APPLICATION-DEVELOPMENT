import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Mock users data
const mockusers = [
  { id: 1, username: 'timoty', displayname: 'timoty' },
  { id: 2, username: 'thadeaus', displayname: 'manya' },
  { id: 3, username: 'esthy', displayname: 'nandwa' },
  { id: 4, username: 'laura', displayname: 'otinga' }
];

// Home route
app.get("/", (req, res) => {
  res.send("Hello World"); // Simple hello world response
});

// Get all users with optional query parameter
app.get('/api/users', (req, res) => {
  const { username, displayname } = req.query; // Extract query parameters

  // If query parameters exist, filter the users
  if (username) {
    const filteredUsers = mockusers.filter(user =>
      user.username.toLowerCase().includes(username.toLowerCase()) // Filter by username
    );
    return res.send(filteredUsers); // Return filtered list
  }

  if (displayname) {
    const filteredUsers = mockusers.filter(user =>
      user.displayname.toLowerCase().includes(displayname.toLowerCase()) // Filter by displayname
    );
    return res.send(filteredUsers); // Return filtered list
  }

  // If no query parameters, return all users
  res.send(mockusers);
});

// Route to get all products
app.get('/api/products', (req, res) => {
  res.send([
    { id: 1, name: 'mango', price: 100 },
    { id: 2, name: 'banana', price: 50 },
    { id: 3, name: 'apple', price: 80 }
  ]); // Send the list of products
});

// Get a specific user by ID
app.get('/api/users/:id', (req, res) => {
  const parseId = parseInt(req.params.id); // Parse the ID from the URL
  if (isNaN(parseId)) {
    return res.status(400).send('Invalid id'); // If ID is invalid
  }

  const finduser = mockusers.find(user => user.id === parseId); // Find user by ID
  if (!finduser) {
    return res.status(404).send('User not found'); // If user not found
  }

  res.send(finduser); // Send found user details
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
