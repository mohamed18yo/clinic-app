var Pateint = require('./pateint');



async function getPateintCount(){
    return Pateint.count((err,count)=>{
      return count ;
    })
}
   


module.exports={
   
    getPateintCount 
}