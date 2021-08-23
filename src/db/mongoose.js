const mongoose = require('mongoose');
const uri = "mongodb+srv://briannider:10203040@cluster0.xxr1z.mongodb.net/Modda?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
