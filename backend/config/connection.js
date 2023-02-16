const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}



module.exports.connect=function(done)
{
    const url='mongodb://localhost:27017'
    const dbname='socialMedia'
    mongoClient.connect("mongodb://localhost:27017/socialMedia", { useNewUrlParser: true },(err,client)=>{
        if(err){
            console.log("-----------err---------",err);
        }
        else{
            console.log("--------------");  
            state.db=client.db(dbname)
                 done()
        }
    })

    // mongoClient.connect(url,(err,data)=>{
    //     if(err)
    //     return done(err)
    //     state.db=data.db(dbname)
    //      done()
         
    // })
}


module.exports.get=function(){
    return state.db
}