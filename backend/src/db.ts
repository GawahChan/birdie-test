import * as mysql from 'mysql';
import config from './config/db';


export const db = mysql.createConnection(config.mysql);

db.connect(err => {
    if(err) {
        console.log(err);
    }
    console.log("MySQL connected...")
});