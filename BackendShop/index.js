const envPath = process.env.ENV_PATH || '.env';

require('dotenv').config({ path: envPath });

const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
