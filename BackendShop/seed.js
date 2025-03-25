const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const Product = require('./models/Product');

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();

    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'seed-data/products.json'), 'utf-8')
    );

    await Product.insertMany(data);

    console.log('✅ Данные загружены');
    process.exit();
  } catch (error) {
    console.error('❌ Ошибка при загрузке:', error);
    process.exit(1);
  }
};

seedProducts();
