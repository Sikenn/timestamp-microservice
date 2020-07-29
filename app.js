const express = require("express");
const cors = require('cors');

const router = require("./routes/timestampRoutes")

const app = express();

app.use('/api/timestamp', cors(), router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`app is listening on ${port}`)
})

