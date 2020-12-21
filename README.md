# Burger Welly React
A simple app to keep track of all the burgers I had during the Wellington on a Plate event.

The [Visa Wellington on a Plate](https://www.visawoap.com/visawoap) event is New Zealand's biggest annual food festival spanning one month full of tasty events around Wellington.
The three-week burger celebration, where more than 200 venues are serving up creative burger and beer matches, is the highlight of Visawoap.

I initially created this app as a Handlebars.js practice (see my other burger-welly repo) and then decided to convert it into a React app.

## Technologies
This project is created with:
* React & Redux
* Express.js
* SQLite3
* CSS

## Getting started
* After cloning this repo, install dependencies with `npm install`
* migrate and run the seeds:
`npm run knex migrate:latest`
`npm run knex seed:run`
* To run the server: `npm run dev`

## APIs
| Method | Path | Description | NOTES |
|---|---|---|---|
| GET | /api/v1/burger | gets all burgers from the database
| POST | /api/v1/burger | adds a new burger to the database
| DELETE | /api/v1/burger/:id | deletes a burger by id
| PATCH | /api/v1/burger/:id | updates a burger by id

