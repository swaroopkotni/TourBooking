const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const schema = {
   name:{
       type:String
   },
   pwd:{
       type:String
   }
    //Create the schema according to the requirement mentioned below                                          
}
let bookSchema = mongoose.Schema(schema, { collection: 'Sample', timestamps: true });
let connection = {};
connection.getCollection = async () => {
    let database = await mongoose.connect('mongodb://localhost:27017/SampleDb', { useNewUrlParser: true });
    console.log("hi")
    if (database) {
        return database.model("Sample", bookSchema);
    }
    else {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    }
}
module.exports = connection;
