var http = require('http');

// client and server architecture ---> client sends the request (req) and server sends responce (res)
// we are call this function; which is present in a module named "HTTP". so mention require module http

http.createServer(function(req, res){

  res.writeHead(200, {'contentType' : 'text/html'});
  res.write("hello browser");
  res.end();    // if we dont send this the browser waits for more content and dores not display the statement

}).listen(9000);  //to make this server start listneing to the req's, add ".listen".