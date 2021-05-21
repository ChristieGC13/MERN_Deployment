const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require('./server/config/petShelter.config');
require('./server/routes/petShelter.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );