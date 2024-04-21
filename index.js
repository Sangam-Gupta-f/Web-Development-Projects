const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World! this is my first express js program.')
// })

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(request,response){
  var num1 =Number(request.body.num1); 
  var num2 =Number(request.body.num2); 
  var result = num1+num2;
  response.send("result is "+ result);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(__dirname);
  //console.log(request.body.num1);
})