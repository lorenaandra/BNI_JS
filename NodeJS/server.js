const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
	host: "bnibanking.cct0fovy8hem.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "bnibanking",
    password: "bnibanking",
    database: "bni",
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful');
});



app.get('/',(req,res)=>{
  res.json('OK');
})

app.post('/',(req,res)=>{
	var {first_name, surname, email,password} = req.body;
	//var ID  = (data, callback) => {
		
			con.query("SELECT count(*) from user", function (err, result, fields) {
			if (err) throw err;
			console.log(result);
			//return callback(result[0]['count(*)'])
			var ID = result[0]['count(*)']
			console.log(ID)
			var records = [[++ID, req.body.email,req.body.password, req.body.lastName, req.body.firstName]];
			if(records[0][0]!=null)
			{
				con.query("INSERT into user (id_user,email, password, surname, first_name) VALUES ?", [records],function(err,res,fields){

				if(err) {
					console.log(err);

					throw err
				}

				console.log(res);
			});
		}
		//});
	//}
	// console.log(ID)
	// var records = [[++ID, req.body.email,req.body.password, req.body.lastName, req.body.firstName]];
	// if(records[0][0]!=null)
	// {
	// 	con.query("INSERT into user (id_user,email, password, surname, first_name) VALUES ?", [records],function(err,res,fields){

	// 		if(err) {
	// 			console.log(err);

	// 			throw err
	// 		}

	// 		console.log(res);
	// 	});
	// }
	res.json('Form recieved');
	})
})




app.listen(3001,()=>{
  console.log("Port 3001");
})








