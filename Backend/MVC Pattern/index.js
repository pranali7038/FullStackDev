const express = require('express')
const app = express()
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')
const port = 3000

//load database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',productRoutes)
app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})