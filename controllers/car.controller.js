const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient();

class carController{
    static async listCars(req,res){
        const result = await prisma.car.findMany()
        res.render("pages/cars/index",{cars:result});
    }
    static async detailCar(req,res){
        const result = await prisma.car.findUnique({
            where:{
                id:Number(req.params.id)
            }
        })
        res.render("pages/cars/detail",{car:result});
    }
    static async addCar(req,res){
        res.render("pages/cars/create");
    }
}

module.exports= carController;