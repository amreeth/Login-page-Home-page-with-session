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
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});

module.exports = router;
