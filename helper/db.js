// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0-bn4ip.mongodb.net/cilinc2020?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('opened');
  
});

 module.exports = mongoose ;
