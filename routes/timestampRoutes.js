const express = require('express');
const router = express();

const controllers = require("../controllers/timestampControllers")

router.get("/", controllers.newDate);
router.get("/:date_string", controllers.parseDate);


module.exports = router;
