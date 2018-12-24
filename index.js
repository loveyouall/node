var mysql  = require('mysql');  
var cors=require('cors');
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'mysql' 
}); 
 
connection.connect();
var  sql = "SELECT plugin FROM mysql.user WHERE User = 'root'"
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();


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


app.use(cors({
    origin:['*'],  //指定接收的地址
    methods:['GET','POST'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))
app.get('/:id/test', (req, res) => { 
  let flag;  
  if(req.params.id === '2') {
    flag = 'true'
  } else {
    flag = 'false'
  }
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
app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  // res.header('Access-Control-Allow-Credentials', true); // 允许服务器端发送Cookie数据
  //res.header('Access-Control-Allow-Origin', 'www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  // console.log(tableData)
  
  res.end(JSON.stringify(tableData))
})
app.get('/test1', (req, res) => res.send('Hello World1!'))
app.get('/test2', (req, res) => res.send('Hello World2!'))
app.get('/test3', (req, res) => res.send('Hello World3!'))
app.get('/test4', (req, res) => res.send('Hello World4!'))
app.get('/test5', (req, res) => res.send('Hello World5!'))
app.get('/test6', (req, res) => res.send('Hello World6!'))
app.get('/test7', (req, res) => res.send('Hello World7!'))

app.listen('8080', () => console.log('Example app listening on port 3000!'))