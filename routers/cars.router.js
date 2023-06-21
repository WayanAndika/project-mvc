const {Router}= require("express");

const carController=require("../controllers/car.controller");

const router=Router();

router.get("/cars",carController.listCars);


module.exports=router;