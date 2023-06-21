const {Router}=require("express");

// local modules
const carRouter=require("./cars.router");

const router=Router();
router.get("/",(req,res)=>{
    res.render("pages/home");
})

// penggunaan cars router
router.use(carRouter);

// ketika user mengetik link asal maka akan tampil page 404
router.use((req, res, next) => {
  res.status(404).render("pages/404")
});
module.exports=router;