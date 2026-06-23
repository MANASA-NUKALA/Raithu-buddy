require('dotenv').config();
const connectDB = require('./config/db');
const User = require('./models/User');
const Listing = require('./models/Listing');
const CropPrice = require('./models/CropPrice');
const bcrypt = require('bcryptjs');

async function seed() {
  // Let connectDB start an in-memory server when MONGO_URI is not set
  await connectDB(process.env.MONGO_URI);
  await User.deleteMany();
  await Listing.deleteMany();
  await CropPrice.deleteMany();

  const pass = await bcrypt.hash('password', 10);
  const user = await User.create({ name: 'Demo Farmer', email: 'farmer@example.com', password: pass });

  await Listing.create({ title: 'Tomato - 100kg', description: 'Fresh tomatoes', price: 1200, seller: user._id });
  await Listing.create({ title: 'Rice - 50kg', description: 'Sona masuri', price: 3000, seller: user._id });

  await CropPrice.create({ crop: 'Tomato', market: 'Local', price: 12 });
  await CropPrice.create({ crop: 'Rice', market: 'Local', price: 60 });

  console.log('Seed complete');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1) });
