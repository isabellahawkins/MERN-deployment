const express = require('express'),
        port = 8000,
      db_name = "petsdb",
        cors = require('cors'),
         app = express();

require('./server/mongoose')(db_name);
app.use(express.json()); 

app.use(cors());
app.use(express.urlencoded({ extended: true })); 


require('./server/routes')(app);

app.listen(port, () => 
    console.log('Listening on Port 8000')
)

