import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const mockusers = [
  { id: 1, username: "timothy", displayname: "timothy" },
  { id: 2, username: "thaddeaus", displayname: "thaddeaus" },
  { id: 3, username: "esthy", displayname: "esthy" }
];

// Home route
app.get("/", (req, res) => {
  res.status(200).send({ msg: "helloworld" });  // Changed to 200 for OK status
});

// Users route - Return all users
app.get("/api/users", (req, res) => {
  res.send(mockusers);  // Return all users from the mock data
});

// Items route
app.get("/api/items", (req, res) => {
  res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

// Specific user by ID
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);  // Parse ID from URL
  const user = mockusers.find(u => u.id === userId);  // Find user by ID
  
  if (user) {
    res.status(200).send(user);  // Return the user data if found
  } else {
    res.status(404).send({ msg: "User not found" });  // Return error if user not found
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
