import * as express from "express";
import {db} from "../db";

export const pingController = express.Router();

  pingController.get('/', (_, res) => {
    res.status(200).json({
      test: 'Hello World!'
    })
  });
  
  pingController.get('/hello', (_, res) => {
    res.status(200).json({
      greetings: 'Thank you for spending some time on this test. All the best 🙌'
    });
  });
  
  pingController.get('/events', (_, res) => {
    db.query('select payload from events', (err, results) => {
        if(err) throw err;
        res.send(results);
    });
  })