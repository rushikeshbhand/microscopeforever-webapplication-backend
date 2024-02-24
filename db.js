const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/microscopeforeverdb'; //MongoDB URI

const connectToMongo = ()=> { mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err)) }

module.exports = connectToMongo;
