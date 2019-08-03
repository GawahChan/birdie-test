import * as express from "express";
import {pingController} from "./controllers/ping";
import * as cors from "cors";

const app = express();

app.use(cors());
app.use(pingController);

export default app;
