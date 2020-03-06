


var express = require('express');
var http = require ('http');
var path = require("path");
var app = express();


app.set("views",path.resolve(__dirname,"views"));//tell express where to find views
app.set('view engine', 'ejs');//tell express to use ejs views
app.get("/", function(request,response){//message response
  response.render("index",{
    message: "It's alive!"
  });
});
http.createServer(app).listen(8080);
