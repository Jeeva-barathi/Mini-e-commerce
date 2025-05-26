const express = require('express')
const app= express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const mongoose = require("mongoose");
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname,'config','config.env')});

const products= require('./routes/product');
const orders= require('./routes/order');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("API is working");
});

// Import routes
const productRoutes = require("./routes/productRoutes"); // adjust as per your file
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.listen(process.env.PORT,()=>{
    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});
