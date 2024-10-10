import express from "express";

//create a express app
const app = express();

//app listen to the port 
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
})