const express = require('express');
const router = express();

const { newDate, parseDate } = require("../controllers/timestampControllers")

router.get("/", newDate);
router.get("/:date_string", parseDate);

module.exports = router;
