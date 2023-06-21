const {Router}= require("express");

const categoryController=require("../controllers/category.controller");

const router=Router();

router.get("/categories",categoryController.listCategories);
router.get("/category/create",categoryController.addCategory);
router.post("/category",categoryController.storeCategory);
router.get("/category/:id/edit",categoryController.editCategory);
router.post("/category/:id/edit",categoryController.updateCategory);
router.post("/category/:id/delete",categoryController.deleteCategory);


module.exports=router;