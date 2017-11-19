var express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const session = require('express-session');

const PORT = 5700;

const app = express();

app.use(express.static(path.join(__dirname, './angularCS/dist')));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }));
app.use(session({secret: "asfa984hr349uas4nfa9348nf34fn408"}));



require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT, ()=> {
  console.log(`Listening on port: ${PORT}`)
})
