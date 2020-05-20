import express from 'express';

/**
 * A small server was created to test the 'nodemon'. 
 * To run the debug just click on 'F5'.
 */
const app = express();
app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
})
