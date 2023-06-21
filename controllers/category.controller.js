const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient();

class categoryController{
    static async listCategories(req,res){
        const result = await prisma.category.findMany({})
        res.render("pages/categories/index",{categories:result});
    }
    static async addCategory(req,res){
        const result=await prisma.category.findMany();
        res.render("pages/categories/create",{categories:result});
    }
    static async storeCategory(req,res){
        await prisma.category.create({
            data:{
                name:req.body.name
            }
        });
        res.redirect("/categories");
    }
    static async editCategory(req,res){
        const categories=await prisma.category.findMany();
        const result = await prisma.category.findUnique({
            where:{
                id:Number(req.params.id)
            }
        });
        res.render("pages/categories/edit",{category:result,categories});
    }
    static async updateCategory(req,res){
        await prisma.category.update({
            where:{
                id:Number(req.params.id)
            },
            data:{
                name:req.body.name
            }
        });
        res.redirect("/categories");
    }
    static async deleteCategory(req,res){
        await prisma.category.delete({
            where:{
                id:Number(req.params.id)
            }
        });
        res.redirect("/categories");
    }
}

module.exports= categoryController;