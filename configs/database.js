import mongoose from 'mongoose';
import "dotenv/config.js"

mongoose.connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected Successfully to The Database"));

