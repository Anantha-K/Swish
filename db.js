const { default: mongoose } = require("mongoose");

const connectDb =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Success");
    }
    catch(error){
        console.log("Error",error);
    }

}

export default connectDb;