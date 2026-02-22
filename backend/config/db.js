const mongoose = require('mongoose');

const connectDB = async (retries = 5) => {
    if (!process.env.MONGO_URI) {
        console.error('💀 MONGO_URI is not defined in .env file. Exiting...');
        process.exit(1);
    }
    for (let i = 0; i < retries; i++) {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 5000,
            });
            console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
            return conn;
        } catch (error) {
            console.error(`❌ MongoDB Connection Failed (attempt ${i + 1}/${retries}): ${error.message}`);
            if (i < retries - 1) {
                console.log(`⏳ Retrying in 3 seconds...`);
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        }
    }
    console.error('💀 All MongoDB connection attempts failed. Exiting...');
    process.exit(1);
};

module.exports = connectDB;
