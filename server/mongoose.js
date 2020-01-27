const mongoose = require('mongoose');


module.exports = db_name => {
    mongoose.connect('mongodb://localhost/petsdb', {})
        .then(() => console.log('Established a connection to Database'))
        .catch(err => console.log('Something went wrong when connecting to the database', err));
}

mongoose.set('useCreateIndex', true);