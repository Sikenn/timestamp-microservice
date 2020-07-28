const express = require("express");
const router = require("./routes/timestampRoutes")

const app = express();

app.use('/api/timestamp', router);

const port = 3000;

app.listen(port, () => {
	console.log(`app is listening on ${port}`)
})
