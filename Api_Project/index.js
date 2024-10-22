const express = require("express");
const connectDB = require("./config/db");
const app = express()
const port = 3000;
connectDB()

//Configuration
const cloudinary = require('cloudinary').v2


// Configuration
cloudinary.config({ 
  cloud_name: 'djacuwnql', 
  api_key: '171481571748621', 
  api_secret: 'QiqJ8td5At626m75zduUaEtDuk4' // Click 'View API Keys' above to copy your API secret
});

const cors = require('cors')
app.use(cors());

app.use(express.json());

app.set('view engine', 'ejs')
app.use(express.urlencoded())


app.use('/', require('./routes/indexRoutes'))


app.listen(port, (err) => {
  if (err) console.log(err);

  console.log(`server is running on port ${port}`)
})
