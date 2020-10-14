import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/`portfolio_backend`", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected Successfully to The Database"));

