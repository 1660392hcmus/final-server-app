How to run:
Config MySQL server
// Create a file in /server/src/mysql/config.js
{
  const config = {
    host: "yourHostName",
    port: 3306,
    user: "yourUser",
    password: "yourPassWord",
    database: "yourDatabaseName",
    multipleStatements: true
  };
/* User for AWS config S3
  const accessKey = "xxxxxxxxxxxxxxxxxx";
  const secretKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const Bucket = "??????";
  const ACL = "public-read-write";
  const ContentType = "image/jpg";
*/
  module.exports = {
    config,
  };
}
Config Server
 Open a terminal
    $ git clone https://github.com/1660392hcmus/final-server-app.git
    $ npm install
    $ npm run dev:start

Node Host: http://localhost:8080
👌 API
 Post: http://localhost:8080/user/create/account

 Post: http://localhost:8080/user/login

 Get: http://localhost:8080/user/get/all/movie

 Get: http://localhost:8080/user/get/date/:idMovie

 Get: http://localhost:8080/user/get/time/:idMovie/:idDate

 Get: http://localhost:8080/user/get/seated/:idMovie/:idDate/:idTime

 Post: http://localhost:8080/user/booking

 Get: http://localhost:8080/user/get/order

 Path: http://localhost:8080/user/update/seat

 Post: http://localhost:8080/admin/add/movie

 Get: http://localhost:8080/admin/get/all/order

 Get: http://localhost:8080/admin/get/all/order/bymovie/:idMovie

 Get: http://localhost:8080/admin/get/all/order/bydate/:date

 Get: http://localhost:8080/admin/get/all/order/bytime/:timeStart/:timeEnd

 Delete: http://localhost:8080/admin/delete/movie/:idMovie

 Delete: http://localhost:8080/admin/get/movie/:idMovie

 Delete: http://localhost:8080/admin/edit/movie/:idMovie

User

 POST: http://localhost:8080/user/create/account
Request:
{
    "name": "Nguyen Phuoc Thanh",
    "email": "thanhnguyen@gmail.com",
    "password": "makhau8kytu",
    "sdt": "0123456789"
}
Response:
{
    "name": "Nguyen Phuoc Thanh",
    "email": "thanhnguyen@gmail.com",
    "sdt": "0123456789"
}
 POST: http://localhost:8080/user/login
Request:
{
    "email": "thanhnguyen@gmail.com",
    "password": "pass",
}
Response:
{
    "id_user": 35,
    "name": "Nguyen Phuoc Thanh",
    "email": "thanhnguyen@gmail.com",
    "role": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozMywibmFtZSI6IkxlIFF1YW5nIFNhbmciLCJlbWFpbCI6InNhbmcubGVxdWFuZ0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU0MTA0NTIwMH0.0b_pHp5e49SVP-Mod8SVr0oRzizPKcpSy07yaCgTbn4"
}
 GET: http://localhost:8080/user/get/all/movie
{
    "instaces": 6,
    "movies": [
        {
            "id_movie": 1,
            "title": "Bad Times At The El Royale",
            "director": "Bridges",
            "released": 2018,
            "length": 110,
            "price": 120,
            "imagUrl": "https://lottecinemavn.com/Lotte/files/44/4427ab16-6b3e-45c8-9dee-58c8ad84304b.png"
        }
        ...
    ]
}
 GET: http://localhost:8080/user/get/date/:id_movie
Ex: http://localhost:8080/user/get/date/1
Response:

{
    "instaces": 3,
    "dates": [
        {
            "id_date": 1,
            "date": 19
        },
        {
            "id_date": 2,
            "date": 20
        }
    ]
}
 GET: http://localhost:8080/user/get/time/:id_movie/:id_date
Ex: http://localhost:8080/user/get/time/1/1
Response:

{
    "instaces": 1,
    "times": [
        {
            "id_time": 1,
            "time": 1140
        }
    ]
}
 GET: http://localhost:8080/user/get/seated/:id_movie/:id_date/:id_time
Ex: http://localhost:8080/user/get/time/1/1/2
Response:

{
    "max_numRow": 4,
    "max_numCol": 4,
    "instaces": 0,
    "seated": []
}
 POST: http://localhost:8080/user/booking
Request:
body: {
    "id_movie": "1",
    "id_date": "1",
    "id_time": "1",
    "id_seat": "1",
}
Response:
{
    "order": {
        "id_order": 3,
        "name": "tran cong an",
        "title": "Bad Times At The El Royale",
        "date": 19,
        "time": 1140,
        "id_seat": 1
    }
}
 GET: http://localhost:8080/user/get/all/order
Request: Response:
{
    "instance": 1,
    "order": [
        {
            "id_order": 8,
            "title": "Bad Times At The El Royale",
            "date": 19,
            "time": 1140,
            "price": 120,
            "id_seat": 2
        }
    ]
}
 POST: http://localhost:8080/user/delete/order
Request:
body: {
    "id_user": "35",
}
Response:
{
    "statusCode": 200,
    "results": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
 POST: http://localhost:8080/user/update/seat
Request:
body: {
    "id_order": "2",
    "id_newSeat" : "3"
}
Response:
{
    "statusCode": 200,
    "results": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
 GET: http://localhost:8080/logout

Administrator

 POST: http://localhost:8080/admin/add/movie
Request: alt text Response:
{
    message: 'Insert Thanh Cong'
}
 GET: http://localhost:8080/admin/get/all/order/:date
{
    "instance": 1,
    "order": [
        {
            "id_order": 2,
            "name": "Le Quang Sang",
            "title": "Bad Times At The El Royale",
            "date": 21,
            "time": 1140,
            "price": 120,
            "id_seat": 3
        }
    ]
}
 GET: [http://localhost:8080/admin/get/all/order/bymovie/:idMovie]
 GET: [http://localhost:8080/admin/get/all/order/bytime/:timeStart/:timeEnd]