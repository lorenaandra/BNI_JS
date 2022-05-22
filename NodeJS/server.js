const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 

/* create a connection variable with the required details */
var con = mysql.createConnection({
	host: "bnibanking.cct0fovy8hem.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "bnibanking",
    password: "bnibanking",
    database: "bni",
});
 

/* make the connection to the database */
con.connect(function(err) {
    if (err) throw err;
    /* if connection is successful */
    console.log('connection successful');
});


app.get('/',(req,res)=>{
  res.json('OK');
})

/* function that generates a random string of number of given size */
function generate_iban(n) {
    var add = 1, max = 12 - add;

    if ( n > max )
        return generate_iban(max) + generate_iban(n - max);

    max        = Math.pow(10, n+add);
    var min    = max/10; 
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;

    return ("" + number).substring(add); 
}

///// replace with this line when sign-up page is done
//app.post('/sign-up/', (req, res)=>{
app.post('/', (req, res)=>{
    /* get data from form */
	var {first_name, surname, email, password} = req.body;
        /* check if there is already an account tied to given email address */
        con.query("SELECT id_user FROM user WHERE email LIKE '%" + email + "%'",
                 function(err_dtb, result_dtb, fields_dtb) {
            /* create account only if email address is not found in database */
            if(result_dtb[0] == null) {

                /* check total number of records */
                con.query("SELECT count(*) from user", function (err, result, fields) {

                    if (err) throw err;
                    /* initialize fields for database insertion */
                    var ID = result[0]['count(*)']
                    ID++
                    var iban = "BNI" + generate_iban(21)
                    var id_savings_account = 0
                    var records = [[ID, req.body.email, req.body.password, 
                                    req.body.lastName, req.body.firstName, iban, id_savings_account]];
                    /* additional check for id */
                    if(records[0][0] != null) {
                        /* add new user to database */
                        con.query("INSERT into user (id_user, email, password, surname, first_name, iban, id_savings_account) VALUES ?",
                                [records], function(err,res,fields) {
                            if(err) {
                                console.log(err);
                                throw err
                            }
                            console.log(res);
                        });
                    }
					//alert('Form received!');
                    res.json('Form received');
	            })
            } else { // aici e cazul cand utilizatorul exista deja in baza de date cu emailul introdus
                res.json('Invalid email address! This email address is already being used. Please register using a new email address. :( Did you mean to sign in?')
            }
        })
})



///// SIGN IN
// app.post('/sign-in/',(req, res)=>{
//     /* get data from form */
//     var {email, password} = req.body;
//     /* check if there is already an account tied to given email address */
//     con.query("SELECT id_user FROM user WHERE email LIKE '%" + email + 
//             "%'" + " AND password LIKE '%" + password + "%'", function(err_dtb, result_dtb, fields_dtb) {
//         if (err) throw err;
//         /* check if credentials match any entry in database */
//         if (result_dtb[0] != null) {

//         } else {
//             res.json('Invalid email/password combination! Please try again.')
//             res.json('Did you mean to sign up?')
//         }
//     })
// })




app.listen(3001,()=>{
  console.log("Port 3001");
})
