// Third-party modules
const express=require("express");

// Local modules
const router=require("./routers");
// set port 
const port=3000;

const app=express();

// use ejs
app.set("view engine","ejs");

app.use(router);

app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}/`);
});