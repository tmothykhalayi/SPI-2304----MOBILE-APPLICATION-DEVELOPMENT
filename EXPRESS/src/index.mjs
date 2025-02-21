import express from "express";
const app = express();
const PORT =process.env.PORT || 3000;
const mockusers = [{id:1, username:'timoty'  ,displayname:'timoty'},
  {id:2, username:'thadeaus' ,displayname:'manya'},
  {id:3, username:'esthy' ,displayname: 'nandwa'},
  {id:4, username:'laura' ,displayname:'otinga'}
];
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get('/api/users', (req, res) => {
  res.send(mockusers);
});
app.get('/api/products', (req, res) => {
  res.send([{id:1, name:'mango'  ,price:100},
    {id:2, name:'banana' ,price:50},
    {id:3, name:'apple' ,price:80}
  ]);
});
app.get('/api/users/:id', (req, res) => {
  console.log(req.params.id);
  const parseId = parseInt(req.params.id);
  console.log(parseId);
  if(NaN(parseId))return res.status(400).send('Invalid id');
  const finduser = mockusers.find(user => user.id === parseId);
  if(!user) return res.status(404);
  res.send(finduser);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
