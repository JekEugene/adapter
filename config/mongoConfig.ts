import { ConnectionOptions, connect } from "mongoose";

const connectDB = async () => {
    try {
        const options: ConnectionOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            //useFindAndModify: false,
            useUnifiedTopology: true,
        };
        console.log('con1' + process.env.MONGODB_HOST);
        await connect(`mongodb://${process.env.MONGODB_HOST}:27017/adapter`, options);
        console.log('con2');
    } catch (err) {
        console.log('confail');
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;