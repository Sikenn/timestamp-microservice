# API project: Timestamp Microservice

## APis and Microservices Projects

> This projects is made for the [Free Code Camp](https://www.freecodecamp.org/learn)
> certification

## User Stories

1. The **API** endpoint is **GET** [project_url]/api/timestamp/:date_string?

2. A date string is valid if can be successfully parsed by `new Date(date_string)`.
Note that the unix timestamp needs to be an integer (not a string) specifyin milliseconds.
In ou test we will use date strings compliant with **ISO-8601**
(e.g. "2016-11-20") because this will ensure an UTC timestamp.

3. If the date string is empty it should be equivalent to trigger `new Date()`,
i.e. the service uses the current timestamp.

4. If the date strin is valid the api returns a **JSON** having the structure
`{ unix: <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{ unix: 1479663089000, utc: "Sun, 20 Nov 2016 17:31:29 GMT" }`

5. If the date string is invalid the api returns a **JSON** having the structure
`{ error: "Invalid Date" }`

### Example Usage

[https://timestamp-microservice-sk.herokuapp.com//api/timestamp/2015-12-25](https://timestamp-microservice-sk.herokuapp.com//api/timestamp/2015-12-25)
[https://timestamp-microservice-sk.herokuapp.com//api/timestamp/1451001600000](https://timestamp-microservice-sk.herokuapp.com//api/timestamp/1451001600000)

### Example output

`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`
