const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
dotenv.config({path:"server/config/config.env"})

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret:process.env.CLOUD_SECRET,
    secure: true
  });

module.exports = cloudinary;