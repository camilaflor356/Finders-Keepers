//-----------------------------
// #region Setup
//-----------------------------
import express from 'express';

const app = express();
const PORT = 4000;

import path from 'path';
import sqlite from 'sqlite3';


//#endregion Setup

//-----------------------------
//#region App Config
//-----------------------------
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// Middleware that parses POST / PUT requests from a client
app.use(express.json());

// Handle CORS w/ client
// For more information about CORS (Cross-Origin Resource Sharing):
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
  // Allow access from multiple origins
  const allowedOrigins = [
    "http://localhost:8080",
    "http://localhost:5173",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // Allow specific requests
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Pass to next layer of middleware
  next();
});

const dbFile = "zomatoRest.db";
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});


//begin endpoints//

//only returns one row
//0-5
const filterByRatings = (request, response) => {
    const ratings = parseInt(request.params.ratings);
    const query = `SELECT * FROM restaurants WHERE "Aggregate rating" = ?`;
   
    db.all(query, [ratings], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      if (result) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    });
   };
   
app.get("/ratings/:item", filterByRatings);

//only one row
//1-4
const filterByPrice = (request, response) => {
    const prices = parseInt(request.params.prices);
    const query = `SELECT * FROM restaurants WHERE "price range" = ?`;
   
   
    db.all(query, [prices], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
    
      if (result) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    });
   };

app.get("/prices/:prices", filterByPrice);

//not returning
const filterByCuisines = (cuisineDropdown, response) => {
  const cuisines = '%' + (cuisineDropdown.params.cuisines) + '%';
  const query = `SELECT * FROM restaurants WHERE "Cuisines" LIKE ?`;   
   
   
    db.all(query, [cuisines], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }

      if (result) {
        console.log("we have a result! " + result);
        console.log("we have a result! " + cuisines);
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    });
   };
   
   app.get("/finderskeepers/:cuisines/", filterByCuisines);
//end endpoints//

//make a bunch of lil functions with if statements which will add on to a bigger where clause
//when the value = any where is true (where true)
//make everything into a chain of params





app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:4000`);
  });