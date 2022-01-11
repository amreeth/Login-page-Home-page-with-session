var express = require('express');
const { response } = require('../app');
var router = express.Router();
const session = require('express-session');
const { load } = require('nodemon/lib/config');

var userLogin = {
  name: 'Amreeth',
  emailId: 'amreethashok@gmail.com',
  password: '123'
}
var adminLogin = {
  name: 'Admin',
  emailId: 'admin@gmail.com',
  password: '321'
}

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
      image:"https://www.91-img.com/pictures/143799-v6-oppo-reno-6-mobile-phone-large-1.jpg"
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
      image:"https://cdn.dxomark.com/wp-content/uploads/medias/post-72823/asusrogphone5-1024x768.jpg"
    },
    {
      name:"Nokia C01",
      category:"mobile",
      price:'$100',
      image:"https://m.media-amazon.com/images/I/61CXAHkNXCL._SL1080_.jpg"
    }
  ]
 


/* GET home page. */
router.get('/', function (req, res, next) {

  let data = req.session.name
  if (req.session.loginVarified) {
// console.log("api call for cookie",);
    let title = 'Home Page'
    res.render('index', { user: true, products, data, title });
  } else {
    //console.log("api call:",req);
    //console.log("api call:",res);
    let title = 'Login Page'
    res.render('user/login', { title });
  }

});
router.get('/login', (req, res) => {
  // console.log("api call:",req);
  let title = 'Login Page'
  res.render('user/login', { title });
})

router.post('/login', (req, res) => {
  if (userLogin.emailId == req.body.email && userLogin.password == req.body.password) {
    req.session.loginVarified = true
    req.session.email = req.body.email
    req.session.password = req.session.password
    req.session.name = userLogin.name
    res.redirect('/');

  } else if (adminLogin.emailId == req.body.email && adminLogin.password == req.body.password) {
    req.session.loginVarified = true
    req.session.email = req.body.email
    req.session.password = req.session.password
    req.session.name = adminLogin.name
    let data = req.session.name
    let title = 'Admin Page'
    res.render('user/admin', { admin: true, products, data, title })
  } else {
    var error = 'Invalid username or password..'
    res.render('user/login', { error })
  }
})

router.get('/logout', (req, res) => {
console.log('api call');
  req.session.destroy()
  
  res.redirect('/')
})

router.get('/register', (req, res) => {
  let title = 'Sign Up Page'
  res.render('user/register', { title })
})

router.post('/register', (req, res) => {
  console.log('api call :', req.body);
  res.redirect('/')
})

module.exports = router;