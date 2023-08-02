// const db = require("../db")
// const Car = require("../models/Car") 


// const carsData = [
//     {
//         make: 'Ferrari',
//         model: 'LaFerrari',
//         year: 2022,
//         topSpeed: 218,
//         engine: '6.3L V12',
//         horsepower: 950,
//         torque: 664,
//         price: 2500000,
//         imageURL: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
//         description: 'A high-performance hybrid sports car.',
//       },
//       {
//         make: 'Bugatti',
//         model: 'Bolide',
//         year: 2023,
//         topSpeed: 311,
//         engine: '8.0L W16',
//         horsepower: 1825,
//         torque: 1850,
//         price: 4500000,
//         imageURL: 'https://thearsenale.com/cdn/shop/articles/bugatti-bolide-prototype_100887184_h_1600x750.jpg?v=1686827919',
//         description: 'A track-focused hypercar from Bugatti.',
//       },
//       {
//         make: 'Bugatti',
//         model: 'Chiron Super Sport',
//         year: 2022,
//         topSpeed: 273,
//         engine: '8.0L W16',
//         horsepower: 1600,
//         torque: 1600,
//         price: 4000000,
//         imageURL: 'https://wallpapercave.com/wp/wp11863517.jpg',
//         description: 'The ultimate grand tourer from Bugatti.',
//       },
//       {
//         make: 'Koenigsegg',
//         model: 'Jesko Absolut',
//         year: 2023,
//         topSpeed: 330,
//         engine: '5.0L Twin-Turbo V8',
//         horsepower: 1600,
//         torque: 1500,
//         price: 4300000,
//         imageURL: 'https://www.topgear.com/sites/default/files/images/news-article/2019/09/1c53561be33d1b74a60e02047f9f37a9/jeskolucerne-stevenwade-3.jpg',
//         description: 'The fastest car from Koenigsegg.',
//       },
//       {
//         make: 'SSC',
//         model: 'Tuatara',
//         year: 2021,
//         topSpeed: 331,
//         engine: '5.9L Twin-Turbo V8',
//         horsepower: 1750,
//         torque: 1350,
//         price: 1850000,
//         imageURL: 'https://wallpapercave.com/wp/wp6654752.jpg',
//         description: 'The Tuatara holds the record for the fastest production car.',
//       },
//       {
//         make: 'Koenigsegg',
//         model: 'Agera RS',
//         year: 2017,
//         topSpeed: 277,
//         engine: '5.0L Twin-Turbo V8',
//         horsepower: 1160,
//         torque: 1280,
//         price: 2500000,
//         imageURL: 'https://www.hdcarwallpapers.com/walls/koenigsegg_agera_rs1_4k-HD.jpg',
//         description: 'A powerful and fast car from Koenigsegg.',
//       },
//       {
//         make: 'Hennessey',
//         model: 'Venom F5',
//         year: 2022,
//         topSpeed: 311,
//         engine: '6.6L Twin-Turbo V8',
//         horsepower: 1817,
//         torque: 1193,
//         price: 2800000,
//         imageURL: 'https://hips.hearstapps.com/hmg-prod/images/hennessey-venom-f5-03-1509553766.jpg',
//         description: 'A hypercar with extreme performance from Hennessey.',
//       },
//       {
//         make: 'McLaren',
//         model: 'Speedtail',
//         year: 2021,
//         topSpeed: 250,
//         engine: '4.0L Twin-Turbo V8',
//         horsepower: 1035,
//         torque: 848,
//         price: 2250000,
//         imageURL: 'https://wallpapers.com/images/hd/mclaren-speedtail-1920-x-1080-wallpaper-2dfagnujg7a4sb4x.jpg',
//         description: 'A limited-production hypercar from McLaren.',
//       },
//       {
//         make: 'Lamborghini',
//         model: 'Veneno',
//         year: 2014,
//         topSpeed: 221,
//         engine: '6.5L V12',
//         horsepower: 740,
//         torque: 507,
//         price: 4500000,
//         imageURL: 'https://wallpaperaccess.com/full/151871.jpg',
//         description: 'A rare and extreme hypercar from Lamborghini.',
//       },
//       {
//         make: 'Lamborghini',
//         model: 'Aventador SVJ Roadster',
//         year: 2020,
//         topSpeed: 217,
//         engine: '6.5L V12',
//         horsepower: 759,
//         torque: 531,
//         price: 580000,
//         imageURL: 'https://wallpapercave.com/wp/wp7160396.jpg',
//         description: 'A powerful and convertible supercar from Lamborghini.',
//       },
//       {
//         make: 'Ferrari',
//         model: 'SF90 Stradale',
//         year: 2020,
//         topSpeed: 211,
//         engine: '4.0L Twin-Turbo V8',
//         horsepower: 986,
//         torque: 590,
//         price: 625000,
//         imageURL: 'https://e1.pxfuel.com/desktop-wallpaper/209/830/desktop-wallpaper-2020-ferrari-sf90-stradale-ferrari-sf90-stradale.jpg',
//         description: 'A high-performance plug-in hybrid from Ferrari.',
//       },
//       {
//         make: 'Chevrolet',
//         model: 'Corvette Z06',
//         year: 2023,
//         topSpeed: 210,
//         engine: '5.5L V8',
//         horsepower: 670,
//         torque: 650,
//         price: 120000,
//         imageURL: 'https://www.wallacechevrolet.com/blogs/3107/wp-content/uploads/2021/04/2022-chevrolet-corvette-z06-stingray-near-stuart-fl-1024x578.jpg',
//         description: 'The 2023 Chevrolet Corvette Z06 is a high-performance sports car with a powerful V8 engine and track-focused capabilities.'
//       },
//       {
//         make: 'Aston Martin',
//         model: 'Valkyrie',
//         year: 2021,
//         topSpeed: 250,
//         engine: '6.5L V12',
//         horsepower: 1160,
//         torque: 664,
//         price: 3600000,
//         imageURL: 'https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/16:9/w_2560%2Cc_limit/Aston-Martin-Valkyrie-HED.jpg',
//         description: 'A high-performance hypercar with Formula 1 technology.'
//       },
//       {
//         make: 'Aston Martin',
//         model: 'Valhalla',
//         year: 2023,
//         topSpeed: 217,
//         engine: '3.0L Twin-Turbo V6 Hybrid',
//         horsepower: 937,
//         torque: 738,
//         price: 1900000,
//         imageURL: 'https://www.astonmartin.com/-/media/models---valhalla/_dsc9594---resized.jpg?mw=1980&rev=-1&hash=2B70698AD183E52C2E8C0FCD551A7CBE',
//         description: 'A cutting-edge hypercar from Aston Martin, combining stunning design with hybrid performance.'
//       }
      

      

      
  
//   // Add more cars data...
// ]

// // Seed cars data function
// const seedCars = async () => {
//   try {
//     // Delete all existing cars (optional)
//     await Car.deleteMany({})
//     await Car.insertMany(carsData)
//     // Loop over each car in the array
//     // Disconnect from MongoDB after seeding
//     db.close();
//   } catch (error) {
//     console.error('Error seeding car data:', error)
//     db.close()
//   }
// }


// // Call the seed function
// seedCars()



const db = require("../db");
const Car = require("../models/Car");
// const Image = require("../models/Image");

const carsData = [
  {
    make: 'Ferrari',
    model: 'LaFerrari',
    year: 2022,
    topSpeed: 218,
    engine: '6.3L V12',
    horsepower: 950,
    torque: 664,
    price: 2500000,
    description: 'A high-performance hybrid sports car.',
    imageURL: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      'https://cdn.wallpapersafari.com/29/34/yVfTKI.jpg',
      'https://editorial.pxcrush.net/carsales/general/editorial/2015_ferrari_laferrari_5.jpg?width=1024&height=683',

    ],
    soundURL: 'http://localhost:3000/Ferrari.mp3'
  },
  {
    make: 'Bugatti',
    model: 'Bolide',
    year: 2023,
    topSpeed: 311,
    engine: '8.0L W16',
    horsepower: 1825,
    torque: 1850,
    price: 4500000,
    imageURL: [
      'https://thearsenale.com/cdn/shop/articles/bugatti-bolide-prototype_100887184_h_1600x750.jpg?v=1686827919',
      'https://www.shutterstock.com/image-illustration/szczecinpolandnovember-2020bugatti-bolide-on-track-600w-1869040966.jpg',
      'https://w0.peakpx.com/wallpaper/901/610/HD-wallpaper-bugatti-bolide-car.jpg',
      'https://4kwallpapers.com/images/wallpapers/bugatti-bolide-hyper-sports-cars-2021-4096x2304-6277.jpeg',
      'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/10/Bugatti-Bolide-doors-open.jpg',
      'https://ourautoexpert.com/wp-content/uploads/2020/10/Bugatti-Bolide22.jpg',
      'https://cdn.carbuzz.com/gallery-images/2024-bugatti-bolide-dashboard-carbuzz-1087001-1600.jpg',
      'https://cdn.carbuzz.com/gallery-images/2024-bugatti-bolide-steering-wheel-carbuzz-1086997-1600.jpg',


    
    ],
      description: 'A track-focused hypercar from Bugatti.',
      soundURL: 'http://localhost:3000/Bolide.mp3'
  },
  {
    make: 'Bugatti',
    model: 'Chiron Super Sport',
    year: 2022,
    topSpeed: 273,
    engine: '8.0L W16',
    horsepower: 1600,
    torque: 1600,
    price: 4000000,
    imageURL: 'https://wallpapercave.com/wp/wp11863517.jpg',
    description: 'The ultimate grand tourer from Bugatti.',
  },
  {
    make: 'Koenigsegg',
    model: 'Jesko Absolut',
    year: 2023,
    topSpeed: 330,
    engine: '5.0L Twin-Turbo V8',
    horsepower: 1600,
    torque: 1500,
    price: 4300000,
    imageURL: 'https://www.topgear.com/sites/default/files/images/news-article/2019/09/1c53561be33d1b74a60e02047f9f37a9/jeskolucerne-stevenwade-3.jpg',
    description: 'The fastest car from Koenigsegg.',
    soundURL: 'http://localhost:3000/Jesko.mp3'
  },
  {
    make: 'SSC',
    model: 'Tuatara',
    year: 2021,
    topSpeed: 331,
    engine: '5.9L Twin-Turbo V8',
    horsepower: 1750,
    torque: 1350,
    price: 1850000,
    imageURL: 'https://wallpapercave.com/wp/wp6654752.jpg',
    description: 'The Tuatara holds the record for the fastest production car.',
  },
  {
    make: 'Koenigsegg',
    model: 'Agera RS',
    year: 2017,
    topSpeed: 277,
    engine: '5.0L Twin-Turbo V8',
    horsepower: 1160,
    torque: 1280,
    price: 2500000,
    imageURL: 'https://www.hdcarwallpapers.com/walls/koenigsegg_agera_rs1_4k-HD.jpg',
    description: 'A powerful and fast car from Koenigsegg.',
  },
  {
    make: 'Hennessey',
    model: 'Venom F5',
    year: 2022,
    topSpeed: 311,
    engine: '6.6L Twin-Turbo V8',
    horsepower: 1817,
    torque: 1193,
    price: 2800000,
    imageURL: 'https://hips.hearstapps.com/hmg-prod/images/hennessey-venom-f5-03-1509553766.jpg',
    description: 'A hypercar with extreme performance from Hennessey.',
  },
  {
    make: 'McLaren',
    model: 'Speedtail',
    year: 2021,
    topSpeed: 250,
    engine: '4.0L Twin-Turbo V8',
    horsepower: 1035,
    torque: 848,
    price: 2250000,
    imageURL: 'https://wallpapers.com/images/hd/mclaren-speedtail-1920-x-1080-wallpaper-2dfagnujg7a4sb4x.jpg',
    description: 'A limited-production hypercar from McLaren.',
  },
  {
    make: 'Lamborghini',
    model: 'Veneno',
    year: 2014,
    topSpeed: 221,
    engine: '6.5L V12',
    horsepower: 740,
    torque: 507,
    price: 4500000,
    imageURL: 'https://wallpaperaccess.com/full/151871.jpg',
    description: 'A rare and extreme hypercar from Lamborghini.',
  },
  {
    make: 'Lamborghini',
    model: 'Aventador SVJ Roadster',
    year: 2020,
    topSpeed: 217,
    engine: '6.5L V12',
    horsepower: 759,
    torque: 531,
    price: 580000,
    imageURL: 'https://wallpapercave.com/wp/wp7160396.jpg',
    description: 'A powerful and convertible supercar from Lamborghini.',
    soundURL: 'http://localhost:3000/Aventador.mp3'
  },
  {
    make: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2020,
    topSpeed: 211,
    engine: '4.0L Twin-Turbo V8',
    horsepower: 986,
    torque: 590,
    price: 625000,
    imageURL: 'https://e1.pxfuel.com/desktop-wallpaper/209/830/desktop-wallpaper-2020-ferrari-sf90-stradale-ferrari-sf90-stradale.jpg',
    description: 'A high-performance plug-in hybrid from Ferrari.',
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Z06',
    year: 2023,
    topSpeed: 210,
    engine: '5.5L V8',
    horsepower: 670,
    torque: 650,
    price: 120000,
    imageURL: 'https://www.wallacechevrolet.com/blogs/3107/wp-content/uploads/2021/04/2022-chevrolet-corvette-z06-stingray-near-stuart-fl-1024x578.jpg',
    description: 'The 2023 Chevrolet Corvette Z06 is a high-performance sports car with a powerful V8 engine and track-focused capabilities.',
    soundURL: 'http://localhost:3000/Z06.mp3'
  },
  {
    make: 'Aston Martin',
    model: 'Valkyrie',
    year: 2021,
    topSpeed: 250,
    engine: '6.5L V12',
    horsepower: 1160,
    torque: 664,
    price: 3600000,
    imageURL: 'https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/16:9/w_2560%2Cc_limit/Aston-Martin-Valkyrie-HED.jpg',
    description: 'A high-performance hypercar with Formula 1 technology.'
  },
  {
    make: 'Aston Martin',
    model: 'Valhalla',
    year: 2023,
    topSpeed: 217,
    engine: '3.0L Twin-Turbo V6 Hybrid',
    horsepower: 937,
    torque: 738,
    price: 1900000,
    imageURL: 'https://www.astonmartin.com/-/media/models---valhalla/_dsc9594---resized.jpg?mw=1980&rev=-1&hash=2B70698AD183E52C2E8C0FCD551A7CBE',
    description: 'A cutting-edge hypercar from Aston Martin, combining stunning design with hybrid performance.'
  }
];

// Seed cars data function
const seedCars = async () => {
  try {
    // Delete all existing cars and images (optional)
    await Car.deleteMany({});
    await Car.insertMany(carsData)


    // Disconnect from MongoDB after seeding
    db.close();
  } catch (error) {
    console.error('Error seeding car data:', error);
    db.close();
  }
};

// Call the seed function
seedCars();
