// var mysql = require('mysql');  
// var connection = mysql.createConnection({     
//   host     : 'localhost',       
//   user     : 'root',              
//   password : '123456',       
//   port: '3306',                   
//   database: 'mysql' 
// }); 
 
// connection.connect();
// var  sql = "SELECT plugin FROM mysql.user WHERE User = 'root'"
// //查
// connection.query(sql,function (err, result) {
//         if(err){
//           console.log('[SELECT ERROR] - ',err.message);
//           return;
//         } 
//       //  console.log(result);
// });
 
// connection.end();
var cors = require('cors');
var bodyParse = require('body-parser')
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data



const express = require('express')
const app = express()
const tableData = [{
  id: 1,
  date: '2016-05-03',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333,
  value2: true
}, {
  id: 2,
  date: '2016-05-02',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333,
  value2: false
}, {
  id: 3,
  date: '2016-05-04',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333,
  value2: true

}, {
  id: 4,
  date: '2016-05-01',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333,
  value2: false
}]
const user = [{
  id: 1,
  name: 'wbb',
  password: '666',
  operate: '1',
  group: ''
}, {
  id: 2,
  name: 'wd',
  password: '233',
  operate: '2',
  group: ''
}, {
  id: 3,
  name: 'lt',
  password: '666',
  operate: '3',
  group: ''
}, {
  id: 4,
  name: 'mt',
  password: '666',
  operate: '0',
  group: ''
}]

const data = [{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1'
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
    children: [{
      label: '三级 2-1-1'
    }]
  }, {
    label: '二级 2-2',
    children: [{
      label: '三级 2-2-1'
    }]
  }]
}, {
  label: '一级 3',
  children: [{
    label: '二级 3-1',
    children: [{
      label: '三级 3-1-1'
    }]
  }, {
    label: '二级 3-2',
    children: [{
      label: '三级 3-2-1'
    }]
  }]
}]
const student = [{
  id: 1,
  name: 'wbb',
  count: '100'
}, {
  id: 1,
  name: 'wbb',
  count: '100'
}, {
  id: 1,
  name: 'wbb',
  count: '100'
}, {
  id: 1,
  name: 'wbb',
  count: '100'
}]
var flag = false
app.use(cors({
    origin:['*'],  //指定接收的地址
    methods:['GET','POST'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))
app.use(bodyParse.urlencoded({extended: false}))
app.get('/:id/test', (req, res) => { 
  if(req.params.id === '2') {
    flag = 'true'
  } else {
    flag = 'false'
  }
  flag = false
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  res.status(200)
  // res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
  //res.header('Access-Control-Allow-Origin', 'www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  // console.log(tableData)
  // res.end(JSON.stringify(tableData))
  return res.end(JSON.stringify({status: flag, statusCode: 200}))
})
app.get('/table', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  // res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
  //res.header('Access-Control-Allow-Origin', 'www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  // console.log(tableData)
  
  res.end(JSON.stringify(tableData))
})
app.get('/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  // res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
  //res.header('Access-Control-Allow-Origin', 'www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  // console.log(tableData)
  console.log(req.params.id)
  res.end(JSON.stringify(student))
})
app.get('/list', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  res.status(200)
  // res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
  //res.header('Access-Control-Allow-Origin', 'www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  // console.log(tableData)
  // res.end(JSON.stringify(tableData))
  return res.end(JSON.stringify({table: data, statusCode: 200}))
})
app.post('/login', (req, res) => {
  let username = req.body.username.split('"').join("")
  let password = req.body.password.split('"').join("")
 
  // let username = req.body.username.replace(new RegExp(//"/), '')
  // let password = req.body.password.replace(new RegExp(//"/), '')
  // console.log(username, password)
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  res.status(200)
  // res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
  //res.header('Access-Control-Allow-Origin', 'www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  // res.json(req.body);
  let name;
  user.forEach( e => {
    if(e.id === parseInt(username) && e.password === password) {
      flag = e.operate
      name = e.name
    }
  })
  console.log(flag)
  if(flag) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(JSON.stringify({status: {token: flag, name: name}, statusCode: 200}))
  } else {
    res.writeHead(400,{'Content-Type':'text/html;charset=utf-8'});
    res.end(JSON.stringify({status: '无权限', statusCode: 400}))
  }
  flag = false
})
app.get('/test3', (req, res) => res.send('Hello World3!'))
app.get('/test4', (req, res) => res.send('Hello World4!'))
app.get('/test5', (req, res) => res.send('Hello World5!'))
app.get('/test6', (req, res) => res.send('Hello World6!'))
app.get('/test7', (req, res) => res.send('Hello World7!'))

app.listen('8080', () => console.log('Example app listening on port 3000!'))