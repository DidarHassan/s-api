const express = require( "express" );
const cors = require( "cors" );
const app = express();

const  port = process.env.PORT || 3000;

const apiData = require("./data.json");


app.get("/", (req , res) =>{
    res.send(
        "Product":[
      {
        "id": 1,
        "title": "Female The Real Iron",
        "description": "Female The Real Iron (Fe) Man Table of Elements Shirt : Clothing, Shoes &  Jewelry",
        "category": "Mens",
        "image": "https://m.media-amazon.com/images/I/C1ce8y0uOwS._CLa%7C2140%2C2000%7C61p4namv0EL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png",
        "price": 45
      },
      {
        "id": 2,
        "title": "The most popular items in Women's Jewelry Sets",
        "description": "Amazon.in Bestsellers: The most popular items in Women's Jewelry Sets",
        "category": "Jewelry",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/71qSVwRJ1FL._AC_UL604_SR604,400_.jpg",
        "price": 445
      },
      {
        "id": 3,
        "title": "Strawberry Sequin Dress",
        "description": "2021 Women’s Fashion Strawberry Sequin Dress Summer Short or Long Sleeve  V-neck Slim Fit A-line Dress",
        "category": "woMens",
        "image": "https://static-01.daraz.com.bd/p/3176ee2e0a03ea630bd281c3d0eba676.jpg",
        "price": 785
      },
      {
        "id": 4,
        "title": "Funny Emo T-Shirt ",
        "description": "Funny Emo T-Shirt : Clothing, Shoes & Jewelry",
        "category": "Mens-clo",
        "image": "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61WX2o9QKXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png",
        "price": 75
      },
      {
        "id": 5,
        "title": "Shining Diva Fashion Jewelry",
        "description": "Shining Diva Fashion Jewelry Gold Plated Kundan Fancy Party Wear Necklace  Traditional Jewellery Set with Earrings for Women & Girls (White)(9602s)",
        "category": "Jewelry",
        "image": "https://m.media-amazon.com/images/I/71mrDfHkPuL._UL1500_.jpg",
        "price": 35
      },
      {
        "id": 6,
        "title": " Dresses & More - 51 For Sale at 1stdibs",
        "description": "Norman Norell: Dresses & More - 51 For Sale at 1stdibs | evening dress,  halston clothes, i want to hold him",
        "category": "woMens",
        "image": "https://a.1stdibscdn.com/norman-norell-pink-silk-vintage-dress-w-silver-clear-sequins-sheer-sleeves-for-sale/1121189/v_43011431626487523377/4301143_master.jpg?width=768",
        "price": 75
      },
      {
        "id": 7,
        "title": "Zaveri Pearls ",
        "description": "Zaveri Pearls Review Sale Online, UP TO 62% OFF | eshowmagazine.com",
        "category": "Jewelry",
        "image": "https://images-na.ssl-images-amazon.com/images/I/716hxM082EL._UY535_.jpg",
        "price": 75
      },
      {
        "id": 8,
        "title": "Saving Myself For Marriage You",
        "description": "Amazon.com: Saving Myself For Marriage You Gotta EARN It! Funny Virgin  T-Shirt : Clothing, Shoes & Jewelry",
        "category": "Mens-clo",
        "image": "https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C61yArfCAQCL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
        "price": 745
      },
      {
        "id": 9,
        "title": "COLOGNE FRANÇAISE EAU DE PARFUM 100mL",
        "description": "A TROMPE L’ŒIL COLOGNE, DECEPTIVELY UNDERSTATED , ARISTOCRATIC AND  SINGULAR. A COMPOSITION PLAYING ON DISSONANT ACCORDS., THE TOP NOTE  REDOLENT WITH ...",
        "category": "fragrance",
        "image": "https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dw2dc54c74/images/large/6PC1H0405.37TT_1_100ML_COLOGNE_FR.jpg",
        "price": 876
      },
      {
        "id": 10,
        "title": "Zaveri Pearls Kundan ",
        "description": "Zaveri Pearls Kundan & Pearls Jewellery Set for Women (Golden)(ZPFK8520) & Pearls Jewellery Set for Women (Golden)(ZPFK8520)",
        "category": "Jewelry",
        "image": "https://m.media-amazon.com/images/I/71BULSeK8ML._UY535_.jpg",
        "price": 781
      },
      {
        "id": 11,
        "title": "Women Dresses Summer",
        "description": "Women Dresses Summer Clothes Women Solid Color Bodycon Dress - China  Clothes and Clothing price | Made-in-China.com",
        "category": "woMens",
        "image": "https://image.made-in-china.com/202f0j00PBaGCseEvYcU/2020-Women-Dresses-Summer-Clothes-Women-Solid-Color-Bodycon-Dress.jpg",
        "price": 876
      },
      {
        "id": 12,
        "title": "It Was Never A Dress Shirt Feminism Clothing Gender Equality",
        "description": "Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All  Other Heathers: 50% Cotton, 50% Polyester Imported twist closure Machine  wash ...",
        "category": "Mens",
        "image": "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71Ted6deD0L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png",
        "price": 678
      },
      {
        "id": 9,
        "title": "COLOGNE FRANÇAISE EAU DE PARFUM 100mL",
        "description": "A TROMPE L’ŒIL COLOGNE, DECEPTIVELY UNDERSTATED , ARISTOCRATIC AND  SINGULAR. A COMPOSITION PLAYING ON DISSONANT ACCORDS., THE TOP NOTE  REDOLENT WITH ...",
        "category": "fragrance",
        "image": "https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dw2dc54c74/images/large/6PC1H0405.37TT_1_100ML_COLOGNE_FR.jpg",
        "price": 876
      },
      {
        "id": 13,
        "title": "Apara Kundan Bridal Wedding",
        "description": "Buy Apara Kundan Bridal Wedding Traditional Fashion Necklace Jewellery Set  for Women at Amazon.in",
        "category": "Jewelry",
        "image": "https://m.media-amazon.com/images/I/71J6n4qWfeL._UY500_.jpg",
        "price": 76
      },
      {
        "id": 14,
        "title": "Women Dresses Summer",
        "description": "Women Dresses Summer Clothes Women Solid Color Bodycon Dress - China  Clothes and Clothing price | Made-in-China.com",
        "category": "woMens",
        "image": "https://image.made-in-china.com/202f0j00PBaGCseEvYcU/2020-Women-Dresses-Summer-Clothes-Women-Solid-Color-Bodycon-Dress.jpg",
        "price": 876
      },
      {
        "id": 15,
        "title": "I Love Ass Shirt T-Shirt",
        "description": "Amazon.com: I Love Ass Shirt T-Shirt : Clothing, Shoes & Jewelry",
        "category": "Mens",
        "image": "https://images-na.ssl-images-amazon.com/images/I/710uIKYVVIL.__AC_SY445_SX342_QL70_ML2_.jpg",
        "price": 1786
      },
      {
        "id": 16,
        "title": "YouBella Gold Plated Jewellery",
        "description": "YouBella Gold Plated Jewellery Set for Women (Golden)(YBNK_5005D) – Indian  Jewel Store",
        "category": "Jewelry",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/516HY139s%2BL.jpg",
        "price": 786
      },
      {
        "id": 26,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "womanAccessories",
        "image": "https://qph.cf2.quoracdn.net/main-qimg-637123cb3b362ffd893e048b11e92984-lq",
        "price": 1786
      },
      {
        "id": 17,
        "title": "Apara Kundan Bridal Wedding",
        "description": "Buy Apara Kundan Bridal Wedding Traditional Fashion Necklace Jewellery Set  for Women at Amazon.in",
        "category": "Jewelry",
        "image": "https://m.media-amazon.com/images/I/71J6n4qWfeL._UY500_.jpg",
        "price": 76
      },
      {
        "id": 29,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "womanAccessories",
        "image": "https://i.pinimg.com/564x/fb/8f/27/fb8f278981b58511726971fd48cf5dd3.jpg",
        "price": 1786
      },
      {
        "id": 18,
        "title": "Celine's First Fragrance Collection In 50 Years, | Into The Gloss",
        "description": "Celine's First Fragrance Collection In 50 Years, | Into The Gloss",
        "category": "fragrance",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbJi9mWnE5GttNYtWgF08y1ZNhPQyZYs90O87ELRcL05lG5GVlJJDAm3-c1YEI91AIcU&usqp=CAU",
        "price": 1786
      },
      {
        "id": 19,
        "title": "Aesthetic Streetwear Bogo Sus T-Shirt",
        "description": "Please refer to the size chart or order a size up for a looser fit. The  shirts are fitted.",
        "category": "Mens",
        "image": "https://m.media-amazon.com/images/I/A1XSsTFkLlL._CLa%7C2140%2C2000%7C51snp5wYzQL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png",
        "price": 75
      },
      {
        "id": 27,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "womanAccessories",
        "image": "https://www.stitchfix.com/women/blog/wp-content/uploads/18-03-06_Set_2_W_OLD_v31.jpg",
        "price": 1786
      },
      {
        "id": 20,
        "title": "New Exclusive long kurti",
        "description": "New Exclusive long kurti, deferent kurti, China Lilen clothes, long 1 piece  Kurtis For Women/Girls",
        "category": "woMens",
        "image": "https://static-01.daraz.com.bd/p/1843f2c140df015f21da8f2b2a84840b.jpg",
        "price": 67
      },
      {
        "id": 21,
        "title": "JewelryGift Simple Design Necklace",
        "description": "Buy JewelryGift Simple Design Necklace Set with Jhumki Earrings Gold Plated  Crystal Moti Pearl Indian Handmade Beautiful Jewellery Set for Girls and  LadiesMN 254-LCT_ Raksha Bandhan gift for sister at Amazon.in",
        "category": "Jewelry",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/61Op1zJQ1FL._SX300_SY300_QL70_ML2_.jpg",
        "price": 7451
      },
      {
        "id": 28,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "womanAccessories",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFh3MNzjGU6zw6c8WVN6dwYIW8HVeFgyv_xz2Ih83dqmzZ2aopcVVCNQywbqfi-9O6ok&usqp=CAU",
        "price": 1786
      },
      {
        "id": 22,
        "title": "Men's Summer Wear",
        "description": "Men's Summer Wear Men's Summer Casual Men's Short Sleeve T-Shirt 2022 Youth  Trend Loose Cotton Korean T-Shirt Soil - China Clothing and Cotton price |  Made-in-China.com",
        "category": "Mens",
        "image": "https://image.made-in-china.com/44f3j00finVQumJCGbP/Men-s-Summer-Wear-Men-s-Summer-Casual-Men-s-Short-Sleeve-T-Shirt-2022-Youth-Trend-Loose-Cotton-Korean-T-Shirt-Soil.jpg",
        "price": 755
      },
      {
        "id": 23,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "fragrance",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqrbVVeG-DlYbeMKPewiMbm2DFTx4BRjlHmGEwJEXX7ODqYCA5jfFkAWY23eSdDmQAbs&usqp=CAU",
        "price": 1786
      },
      {
        "id": 30,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "womanAccessories",
        "image": "https://media.istockphoto.com/photos/female-fashion-clothes-flat-lay-square-picture-id1160533209?k=20&m=1160533209&s=612x612&w=0&h=pA12--4dUFXbYtOIOTCiMXvM77kGlUTwQWkAO3D0_Qk=",
        "price": 1786
      },
      {
        "id": 24,
        "title": "New Exclusive long kurti",
        "description": "New Exclusive long kurti, deferent kurti, China Lilen clothes, long 1 piece  Kurtis For Women/Girls",
        "category": "woMens",
        "image": "https://static-01.daraz.com.bd/p/1843f2c140df015f21da8f2b2a84840b.jpg",
        "price": 67
      },
      {
        "id": 25,
        "title": "celine perfume - Online Discount Shop for Electronics",
        "description": "celine perfume - Online Discount Shop for Electronics, Apparel, Toys,  Books, Games, Computers, Shoes, Jewelry, Watches, Baby Products, Sports &  Outdoors, Office Products, Bed & Bath, Furniture, Tools, Hardware,  Automotive Parts, Accessories",
        "category": "womanAccessories",
        "image": "https://img.freepik.com/free-photo/yellow-dress-purse-shoes-casual-yellow-dress-with-accessories-lady-s-charming-summer-outfit-new-clothes-heel-shoes_274234-10580.jpg",
        "price": 1786
      }
     
    ]
    );
});

app.get("/Product", (req , res) =>{
    res.send(apiData);
});

app.listen(port, ()=>{
 console.log( "didar hassan" );
});
