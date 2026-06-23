require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Support either MONGO_URI or MONGODB_URI from environment
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
// Pass mongoUri if provided; db.js will start an in-memory server when no URI is given
connectDB(mongoUri);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/marketplace', require('./routes/marketplace'));
app.use('/api/crop-prices', require('./routes/cropPrices'));
app.use('/api/weather', require('./routes/weather'));

app.get('/', (req, res) => res.send('RaithuBuddy API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Serve frontend in production when available
const path = require('path');
const fs = require('fs');
const frontendDist = path.join(__dirname, '..', '..', 'frontend', 'dist');
if (process.env.SERVE_FRONTEND === 'true' || fs.existsSync(frontendDist)) {
	app.use(express.static(frontendDist));
	app.get('*', (req, res) => {
		res.sendFile(path.join(frontendDist, 'index.html'));
	});
	console.log('Serving frontend from', frontendDist);
}
