const ProductListData = [
  {
    name: "car",
    carData: [
      {
        id: 1,
        model: "Model S",
        brand: "Tesla",
        year: 2023,
        price: 79999,
        discount: 0.1,
        image:
          "https://i.pinimg.com/736x/ba/fa/a9/bafaa9ee834ac42aaf6f08313e930cbe.jpg",
      },
      {
        id: 2,
        model: "Civic",
        brand: "Honda",
        year: 2022,
        price: 24999,
        discount: 0.05,
        image:
          "https://i.pinimg.com/736x/d9/b9/68/d9b9684daa454d77f961beb0afc430fe.jpg",
      },
      {
        id: 3,
        model: "Mustang",
        brand: "Ford",
        year: 2021,
        price: 55999,
        discount: 0.08,
        image:
          "https://i.pinimg.com/736x/0e/29/78/0e2978879094d0d07c9c1d31ac517a10.jpg",
      },
      {
        id: 4,
        model: "Camry",
        brand: "Toyota",
        year: 2023,
        price: 28999,
        discount: 0.07,
        image:
          "https://i.pinimg.com/736x/53/df/47/53df47fc338f2cee8f1be5ff239a9d17.jpg",
      },
      {
        id: 5,
        model: "Q8",
        brand: "Audi",
        year: 2022,
        price: 39999,
        discount: 0.12,
        image:
          "https://i.pinimg.com/736x/23/f2/4d/23f24dabdb63c09da3a36798b114716e.jpg",
      },
    ],
  },
  {
    name: "phone",
    phoneData: [
      {
        id: 1,
        model: "iPhone 13",
        brand: "Apple",
        year: 2023,
        price: 79999,
        discount: 0.1,
        image:
          "https://i.pinimg.com/736x/3f/77/bf/3f77bf8fea08f1bf0d4f7b5e61a0f7ea.jpg",
      },
      {
        id: 2,
        model: "iPhone 12",
        brand: "Apple",
        year: 2022,
        price: 49999,
        discount: 0.05,
        image:
          "https://i.pinimg.com/736x/7d/0e/ac/7d0eacb350e45a3975bb0f65ed41e6ae.jpg",
      },
      {
        id: 3,
        model: "iPhone 11",
        brand: "Apple",
        year: 2021,
        price: 39999,
        discount: 0.08,
        image:
          "https://i.pinimg.com/736x/fe/8f/cd/fe8fcd7944b91901d98a5368ebbbab57.jpg",
      },
      {
        id: 4,
        model: "Samsung Galaxy S24",
        brand: "Samsung",
        year: 2022,
        price: 69999,
        discount: 0.07,
        image:
          "https://i.pinimg.com/736x/a2/03/82/a20382df5059c61bf3b3cf0ef105d9b3.jpg",
      },
      {
        id: 5,
        model: "Google Pixel 9",
        brand: "Google",
        year: 2022,
        price: 49999,
        discount: 0.12,
        image:
          "https://i.pinimg.com/736x/a8/6b/21/a86b21a46e58e814883e8502a615d6b8.jpg",
      },
    ],
  },
  {
    name: "bike",
    bikeData: [
      {
        id: 1,
        model: "Trek Marlin 5",
        brand: "Trek",
        year: 2023,
        price: 849.99,
        discount: 0.1,
        image:
          "https://i.pinimg.com/736x/a4/26/90/a426907a6fce5d196672a8550a04d404.jpg",
      },
      {
        id: 2,
        model: "Rockhopper",
        brand: "Specialized",
        year: 2023,
        price: 749.99,
        discount: 0.05,
        image:
          "https://i.pinimg.com/736x/6a/34/e1/6a34e19b31becdb8f5dd7bf6a99f05b5.jpg",
      },
      {
        id: 3,
        model: "Giant Talon 2",
        brand: "Giant",
        year: 2023,
        price: 625.0,
        discount: 0.08,
        image:
          "https://i.pinimg.com/736x/cd/dc/7a/cddc7aafaaf478d3196197510ed26543.jpg",
      },
      {
        id: 4,
        model: "Cannondale Trail 7",
        brand: "Cannondale",
        year: 2023,
        price: 625.0,
        discount: 0.1,
        image:
          "https://i.pinimg.com/736x/9d/67/2a/9d672a3618fc10336161de277bbf8f94.jpg",
      },
      {
        id: 5,
        model: "Norco Fluid FS 1",
        brand: "Norco",
        year: 2023,
        price: 269.0,
        discount: 0.12,
        image:
          "https://i.pinimg.com/736x/40/25/9b/40259b58253155bc0bcba2f48f2a98ca.jpg",
      },
    ],
  },
  {
    name: "laptop",
    laptopData: [
      {
        id: 1,
        model: "Lenovo ThinkPad",
        brand: "Lenovo",
        year: 2023,
        price: 79999,
        discount: 0.1,
        image:
          "https://i.pinimg.com/736x/f4/68/e4/f468e4d02a6a9b655aadd8ad1123007e.jpg",
      },
      {
        id: 2,
        model: "MacBook Pro",
        brand: "Apple",
        year: 2022,
        price: 49999,
        discount: 0.05,
        image:
          "https://i.pinimg.com/736x/e8/12/25/e81225ccab1c1085fbe692881bf0a036.jpg",
      },
      {
        id: 3,
        model: "Dell XPS",
        brand: "Dell",
        year: 2021,
        price: 39999,
        discount: 0.08,
        image:
          "https://i.pinimg.com/736x/fa/63/ef/fa63ef9f1d8ec1d1939593a01a36b4f3.jpg",
      },
      {
        id: 4,
        model: "HP Spectre",
        brand: "HP",
        year: 2022,
        price: 69999,
        discount: 0.07,
        image:
          "https://i.pinimg.com/736x/52/37/95/523795dbac64f0981e0f8239c4fe6f4d.jpg",
      },
      {
        id: 5,
        model: "Asus ROG",
        brand: "Asus",
        year: 2022,
        price: 49999,
        discount: 0.12,
        image:
          "https://i.pinimg.com/736x/62/9c/73/629c7374840a3aaa72ebae5ff0758cfb.jpg",
      },
    ],
  },
  {
    name: "motor",
    motorData: [
      {
        id: 1,
        model: "Ducati Panigale V4",
        brand: "Ducati",
        year: 2023,
        price: 79999,
        discount: 0.1,
        image:
          "https://i.pinimg.com/736x/70/a4/02/70a40247d162ffdc9f7dd06377d27d81.jpg",
      },
      {
        id: 2,
        model: "Yamaha R3",
        brand: "Yamaha",
        year: 2022,
        price: 49999,
        discount: 0.05,
        image:
          "https://i.pinimg.com/736x/a7/7c/d1/a77cd14a21f9c262bd280779acc7fc76.jpg",
      },
      {
        id: 3,
        model: "Dream 2024",
        brand: "Honda",
        year: 2024,
        price: 39999,
        discount: 0.08,
        image:
          "https://i.pinimg.com/736x/99/72/b3/9972b320b305b3a0994b4bc8f69d6270.jpg",
      },
      {
        id: 4,
        model: "Scoopy 2023",
        brand: "Honda",
        year: 2022,
        price: 69999,
        discount: 0.07,
        image:
          "https://i.pinimg.com/736x/6e/58/55/6e58555299833b4b4aa7e7ceaa3ad281.jpg",
      },
      {
        id: 5,
        model: "ADV",
        brand: "Honda",
        year: 2022,
        price: 49999,
        discount: 0.12,
        image:
          "https://i.pinimg.com/736x/ce/35/4d/ce354d5c479727576533659cdb355234.jpg",
      },
    ],
  },
];
export default ProductListData;
