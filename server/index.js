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

const dbFile = path.join(__dirname, "zomatoRest.db");
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
   
app.get("/ratings/:ratings", filterByRatings);

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
const filterByCuisines = (request, response) => {
  const cuisines = '%' + (request.params.cuisines) + '%';
  const query = `SELECT * FROM restaurants WHERE "Cuisines" LIKE ?`;   
   
   
    db.all(query, [cuisines], (error, result) => {
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
   
   app.get("/cuisines/:cuisines", filterByCuisines);
//end endpoints//








app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:4000`);
  });