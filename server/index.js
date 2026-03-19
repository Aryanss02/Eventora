const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDB = require('./DB/db')

dotenv.config();

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const bookingRoutes = require('./routes/bookings');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectToDB();

// Health check route (keeps Render from sleeping)
app.get('/', (req, res) => {
  res.status(200).json({ status: 'Server is awake ✅' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));