const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("Running the server with port " + port)
})

app.listen(port, () => {
    console.log('Running the server');
})