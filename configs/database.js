import mongoose from 'mongoose';
import "dotenv/config.js"

const{MONGO_TEST_URL , NODE_ENV , DATABASE_URL } = process.env

mongoose.connect(NODE_ENV === 'test' ? MONGO_TEST_URL : DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected Successfully to The Database"));

