import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.status(201).send({ msg: "helloworld" });
});

// Users route
app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "timothy", displayname: "timothy" },
    { id: 2, username: "thaddeaus", displayname: "thaddeaus" },
    { id: 3, username: "esthy", displayname: "esthy" }
  ]);
});

// New route (assumed for something else like products or items)
app.get("/api/items", (req, res) => {
  res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

// Specific user by ID
app.get("/api/users/:id", (req, res) => {
  console.log(req.params); // Corrected 'request' to 'req'
  // You can handle the ID here (e.g., fetch user by ID)
  res.send({ msg: `User ID is ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
