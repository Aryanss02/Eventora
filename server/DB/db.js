const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("Connected to Database ✅");
  } catch (err) {
    console.error("DB Connection Error ❌", err);
    process.exit(1); // stop app if DB fails
  }
}

module.exports = connectToDB;