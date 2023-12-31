const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient();

class carController{
    static async listCars(req,res){
        const result = await prisma.car.findMany({
            include:{
                category: true 
            }
        })
        res.render("pages/cars/index",{cars:result});
    }
    static async detailCar(req,res){
        const result = await prisma.car.findUnique({
            where:{
                id:Number(req.params.id)
            },
            include:{
                category:true
            }
        })
        res.render("pages/cars/detail",{car:result});
    }
    static async addCar(req,res){
        const result=await prisma.category.findMany();
        res.render("pages/cars/create",{categories:result});
    }
    static async storeCar(req,res){
        await prisma.car.create({
            data:{
                name:req.body.name,
                merk:req.body.merk,
                qty:Number(req.body.qty),
                desc:req.body.desc,
                price:Number(req.body.price),
                img : req.body.img,
                available:req.body.available === "1" ? true : false,
                categoryId:req.body.category
            }
        });
        res.redirect("/cars");
    }
    static async editCar(req,res){
        const categories=await prisma.category.findMany();
        const result = await prisma.car.findUnique({
            where:{
                id:Number(req.params.id)
            }
        });
        res.render("pages/cars/edit",{car:result,categories});
    }
    static async updateCar(req,res){
        await prisma.car.update({
            where:{
                id:Number(req.params.id)
            },
            data:{
                name:req.body.name,
                merk:req.body.merk,
                qty:Number(req.body.qty),
                desc:req.body.desc,
                price:Number(req.body.price),
                img : req.body.img,
                available:req.body.available === "1" ? true : false,
                categoryId:req.body.category
            }
        });
        res.redirect("/cars");
    }
    static async deleteCar(req,res){
        await prisma.car.delete({
            where:{
                id:Number(req.params.id)
            }
        });
        res.redirect("/cars");
    }
}

module.exports= carController;