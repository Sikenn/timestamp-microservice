const newDate = (req, res) => {
	res.json({ unix: Date.now(), uts: Date()});
}

const parseDate = (req, res) => {
	let dateString = req.params.date_string;

	if (/^\d+$/.test(dateString)) {
		dateInt = parseInt(dateString);
		res.json({ 
			unix: dateInt,
			utc: new Date(dateInt).toUTCString()
		})
	}

	let date = new Date(dateString);

	if (date.toString() === "Invalid Date") {
		res.json({ error: "Invalid Date" })
	} else {
		res.json({
			unix: date.valueOf(),
			utc: date.toUTCString()
		});
	}
}

module.exports = {
	newDate,
	parseDate
}
