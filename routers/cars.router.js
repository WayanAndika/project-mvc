const {Router}= require("express");

const carController=require("../controllers/car.controller");

const router=Router();

router.get("/cars",carController.listCars);
router.get("/car/create",carController.addCar);
router.post("/car",carController.storeCar);
router.get("/car/:id",carController.detailCar);


module.exports=router;