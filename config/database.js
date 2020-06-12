const mongoose = require('mongoose');


const mongoURI=process.env.MONGO_URI||'mongodb://127.0.0.1:27017/Digiyouth';

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true,useUnifiedTopology: true  }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
