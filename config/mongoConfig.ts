import { ConnectionOptions, connect } from "mongoose";

const connectDB = async () => {
    try {
        const options: ConnectionOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            //useFindAndModify: false,
            useUnifiedTopology: true,
        };
        await connect(`mongodb://${process.env.MONGODB_HOST}:27017/adapter`, options);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;