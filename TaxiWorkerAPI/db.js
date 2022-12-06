const mongoose = require('mongoose')
const connectionString =  'mongodb+srv://Torero67:58255Val@taxiworker.vofcbzn.mongodb.net/?retryWrites=true&w=majority'

const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}

mongoose.connect(connectionString, options,(err)=>{
if (err) {
    console.log(err);
}else{
    console.log('Database Connected');
}
})