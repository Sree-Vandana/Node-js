const express = require('express')

const expressApp = express();

// syntax: app.get(url, function)
expressApp.get('/', function(req, res){
  res.end("Hello World.");
})

// we can even send "query string" using this like /honeybee?name=van
// this will be called for /honeybee and /honeybee?name=van
expressApp.get('/honeybee', function(req, res){
  const name = req.query.name;
  if(name)
    res.send("Hello Honeybee! "+ name);
  else
    res.send("Hello Honeybee!");
})

// dynamic URL
// instead if fixing to 20 '/honeybee/20'; we can make it dynamic, by storing that in a holder.
// and we can access that holder using params (req object has that).    
expressApp.get('/honeybee/:id', function(req, res){
  const id = req.params.id;
  res.send("Hello Vandana! " + id);
})

expressApp.listen(9001, function(req, res){
  console.log("server running...");
});