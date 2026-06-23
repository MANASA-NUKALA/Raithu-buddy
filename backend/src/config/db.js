const mongoose = require('mongoose');

async function connectDB(uri) {
  try {
    // If no URI provided or explicit flag set, start an in-memory MongoDB for local dev
    if (!uri || process.env.USE_MEMORY_DB === 'true') {
      // Lazy-require so this package is optional for production
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      uri = mongod.getUri();
      console.log('Using in-memory MongoDB at', uri);
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
