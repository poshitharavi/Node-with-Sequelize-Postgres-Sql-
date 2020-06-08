import express from 'express' //import express npm package
import routes from './routes' //import routes folder
import cors from 'cors'
import db from './config/database'

require('dotenv').config() //adding environmental variables

const app = express();

/**
 * Middleware
 */
app.use(cors())
app.use(express.json())

/**
 * Check database connection successfull 
 */
db.authenticate()
    .then(() => console.log('Database connected successfully...'))
    .catch(error => console.log('Error', error.message))

routes(app) //setting the routes to routes

/**
 * Inilizing the server
 */
app.listen(process.env.API_PORT, () => {
    console.log(`server started in port : ${process.env.API_PORT}`);
});