var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"iPhone 13",
      category:"mobile",
      price:'$1300',
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629842712000"
    },
    {
      name:"Oneplus 9RT ",
      category:"mobile",
      price:'$658',
      image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1_Untitled_1_8.png"
    },
    {
      name:"Samsung s21 ultra",
      category:"mobile",
      price:'$1200',
      image:"https://www.gizmochina.com/wp-content/uploads/2020/11/Samsung-Galaxy-S21-Ultra-5G-500x500.jpg"
    },
    {
      name:"Mi 11 Ultra ",
      category:"mobile",
      price:'$600',
      image:"https://i02.appmifile.com/362_operator_in/23/04/2021/b23987f4a6605e2f4be4562bd0149fd8.png"
    },
    {
      name:"Samsung M52 5G ",
      category:"mobile",
      price:'$320',
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m526bzkiinu/gallery/in-galaxy-m52-5g-m526-404058-sm-m526bzkiinu-514948644?$684_547_PNG$"
    },
    {
      name:"Vivo X60",
      category:"mobile",
      price:'$290',
      image:"https://m.media-amazon.com/images/I/71YD6OR5IZL._SL1200_.jpg"
    },
    {
      name:"OPPO F19",
      category:"mobile",
      price:'$250',
      image:"https://m.media-amazon.com/images/I/712PBW8cGBL._SL1500_.jpg"
    },
    {
      name:"Mi 11 Ultra ",
      category:"mobile",
      price:'$600',
      image:"https://i02.appmifile.com/362_operator_in/23/04/2021/b23987f4a6605e2f4be4562bd0149fd8.png"
    },
    {
      name:"IQOO 7",
      category:"mobile",
      price:'$350',
      image:"https://m.media-amazon.com/images/I/51OvvRTnJTS._SL1200_.jpg"
    },
    {
      name:"OPPO Reno6 5G",
      category:"mobile",
      price:'$300',
      image:""
    },
    {
      name:"One plus Nord 2 5G",
      category:"mobile",
      price:'$290',
      image:"https://m.media-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
    },
    {
      name:"Redmi 10 Prime",
      category:"mobile",
      price:'$150',
      image:"https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg"
    },
    {
      name:"Tecno Spark 8 Pro",
      category:"mobile",
      price:'$130',
      image:"https://m.media-amazon.com/images/I/81SCv8+cG1L._SL1500_.jpg"
    },
    {
      name:"Samsung M12",
      category:"mobile",
      price:'$130',
      image:"https://m.media-amazon.com/images/I/7162Y5fPdkL._SL1500_.jpg"
    },
    {
      name:"ASUS ROG 5",
      category:"mobile",
      price:'$340',
      image:""
    },
    {
      name:"Nokia C01",
      category:"mobile",
      price:'$100',
      image:"https://m.media-amazon.com/images/I/61CXAHkNXCL._SL1080_.jpg"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});

module.exports = router;
