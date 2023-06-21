const { PrismaClient } = require("@prisma/client");
const { generateHash } = require("../lib/bcrypt");

const prisma = new PrismaClient();

const cars = [
  {
    name: "Mercedes-Benz E-Class",
    merk: "Mercedes-Benz",
    qty: 3,
    available: true,
    desc: "Mercedes-Benz E-Class adalah mobil sedan mewah yang menggabungkan kenyamanan, kecanggihan, dan performa yang luar biasa. Mobil ini menawarkan interior yang mewah dengan material berkualitas tinggi dan teknologi canggih. Ditenagai oleh mesin bertenaga tinggi, Mercedes-Benz E-Class memberikan pengalaman berkendara yang nyaman dan dinamis. Dengan desain yang elegan dan fitur-fitur keselamatan terbaru, Mercedes-Benz E-Class adalah pilihan yang sempurna untuk perjalanan bisnis maupun acara khusus.",
    price: 800000,
    img: "https://contoh.com/mercedes-e-class.jpg",
    categoryId:3
  },
  {
    name: "Toyota Fortuner",
    merk: "Toyota",
    qty: 2,
    available: true,
    desc: "Toyota Fortuner adalah mobil SUV tangguh yang cocok untuk petualangan di dalam dan luar kota. Dengan desain yang sporty dan kokoh, Toyota Fortuner menawarkan ruang kabin yang luas dan performa yang handal. Mobil ini dilengkapi dengan fitur-fitur canggih, termasuk sistem hiburan terkoneksi dan sistem keamanan yang lengkap. Toyota Fortuner memberikan kenyamanan dan kepercayaan diri dalam setiap perjalanan.",
    price: 600000,
    img: "https://contoh.com/toyota-fortuner.jpg",
    categoryId:2
  },
  {
    name: "Honda CR-V",
    merk: "Honda",
    qty: 4,
    available: true,
    desc: "Honda CR-V adalah SUV kompak yang cocok untuk gaya hidup aktif dan keluarga. Dengan desain yang modern dan aerodinamis, Honda CR-V menawarkan ruang yang luas untuk penumpang dan barang bawaan. Mobil ini dilengkapi dengan fitur-fitur canggih seperti sistem penggerak all-wheel drive dan sistem keselamatan Honda Sensing. Ditenagai oleh mesin yang efisien dan performa yang tangguh, Honda CR-V memberikan kenyamanan dan kehandalan dalam setiap perjalanan.",
    price: 500000,
    img: "https://contoh.com/honda-cr-v.jpg",
    categoryId:2
  },
  {
    name: "Toyota Yaris",
    merk: "Toyota",
    qty: 5,
    available: true,
    desc: "Toyota Yaris adalah mobil kompak yang sempurna untuk berkendara di perkotaan. Dengan desain yang stylish dan dinamis, Toyota Yaris menawarkan kenyamanan dan efisiensi bahan bakar yang baik. Mobil ini dilengkapi dengan fitur-fitur modern seperti sistem infotainment yang terhubung dan sistem keselamatan yang lengkap. Toyota Yaris memberikan pengalaman berkendara yang menyenangkan dan praktis.",
    price: 300000,
    img: "https://contoh.com/toyota-yaris.jpg",
    categoryId:3
  },
  {
    name: "BMW Z4 Roadster",
    merk: "BMW",
    qty: 2,
    available: true,
    desc: "BMW Z4 Roadster adalah mobil sport konvertibel yang memadukan kecepatan, gaya, dan sensasi berkendara terbuka. Dengan desain yang aerodinamis dan performa yang impresif, BMW Z4 Roadster memberikan pengalaman berkendara yang mendebarkan. Ditenagai oleh mesin bertenaga tinggi dan fitur-fitur canggih, mobil ini menawarkan kemewahan dan kinerja yang luar biasa. BMW Z4 Roadster adalah pilihan yang tepat bagi pecinta mobil sport yang ingin merasakan kebebasan berkendara di bawah sinar matahari.",
    price: 900000,
    img: "https://contoh.com/bmw-z4-roadster.jpg",
    categoryId:1
  }
];
const categories=[
  {name: "Sport"},
  {name: "SUV"},
  {name: "Sedan"}
];



async function main() {
  for(const category of categories) {
    await prisma.category.create({
      data: category
    })
  }
  for(const car of cars) {
    await prisma.car.create({
      data: car,
    });
  }
  await prisma.user.create({
    data: {
      username: "john",
      password: await generateHash("joko123")
    }
  })

  console.log("Seed data success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
