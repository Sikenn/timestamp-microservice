const newDate = (req, res) => {
  const nowUnix = Date.now();
  const nowUtc = new Date(nowUnix).toUTCString(); 
  res.json({ "unix": nowUnix, "utc": nowUtc });
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

  if (date.toString() === 'Invalid Date') {
    res.json({ error: 'Invalid Date' })
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
