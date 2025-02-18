import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000; // Corrected variable name
app.get("/" ,(req ,res)=>{
  res.status(201).send({msg:"helloworld"});
});
app.get("/api/users",(req ,res)=>{
  res.send([
    {id:1 ,username:"timothy" ,displayname:"timothy"},
    {id:1 ,username:"thaddeaus" ,displayname:"thaddeaus"},
    {id:1 ,username:"esthy",displayname:"esthy"}
  ]);
});
app.get("/api/users",(req ,res)=>{
  res.send([{id:123 ,name:"chicken breast ,price:12.99"}]);
});
app.listen(PORT, () => { // Use PORT instead of port
  console.log(`Server running at http://localhost:${PORT}`);
});


