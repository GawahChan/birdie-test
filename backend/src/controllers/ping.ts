import * as express from "express";
import {db} from "../db";

export const pingController = express.Router();

  pingController.get('/hello', (_, res) => {
    res.status(200).json({
      greetings: 'Thank you for spending some time on this test. All the best 🙌'
    });
  });
  
  pingController.get('/moodObservation/events', (_, res) => {
    db.query('select payload from events where event_type = "mood_observation"', (err, results) => {
        if(err) throw err;
        console.log("Payload JSON Successfully loaded")
        res.status(200).send(results);
    });
  })