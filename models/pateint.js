var mongoose = require('../helper/db');


const pateintSchema = new mongoose.Schema({
    firstName : String ,
    lastName : String ,
    phone : Number ,
    age : Number ,
    date: Date ,
    price : Number ,
    note : String ,
  
  
 
   
});

const Pateint= mongoose.model('pateint', pateintSchema);

module.exports = Pateint