const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 

/* create a connection variable with the required details */
var con = mysql.createConnection({
	host: "bnibanking2.cy0lqptttadh.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "bnibanking2",
    password: "bnibanking2",
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
                    //console.log(ID)
                    //ID++
                    var iban = "BNI" + generate_iban(21)
                    var id_savings_account = 0
                    var isOnline = 0
                    var records = [[ID, req.body.email, req.body.password, 
                                    req.body.lastName, req.body.firstName, iban, id_savings_account, isOnline]];
                    /* additional check for id */
                    if(records[0][0] != null) {
                        /* add new user to database */
                        con.query("INSERT into user (id_user, email, password, surname, first_name, iban, id_savings_account, isOnline) VALUES ?",
                                [records], function(err, res, fields) {
                            if(err) {
                                console.log(err);
                                throw err
                            } else {
                                /* create base account for user if register == successful */
                                var sold = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
                                var card_number = generate_iban(16)
                                var records2 = [[iban, ID, sold, 1, card_number, 0, 0, 0]]
                                con.query("INSERT into base_account (iban, user_id, sold, number_of_cards, card_number, has_savings_account, number_of_transfers, id_transfer) VALUES ?",
                                [records2], function(err_acc, res_acc, fields_acc) {
                                    if(err_acc) {
                                        console.log(err_acc)
                                        throw err_acc
                                    } else {
                                        var cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                                        var year = Math.floor(Math.random() * (2035 - 2023 + 1)) + 2023;
                                        var month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                                        if (month < 10) {
                                            var string_exp = year + "0" + month
                                        } else {
                                            var string_exp = year + "" + month
                                        }
                                        var expiration_date = parseInt(string_exp)
                                        var records3 = [[card_number, cvv, ID, expiration_date, iban, 1]]
                                        con.query("INSERT into card (card_number, cvv, user_id, expiration_date, IBAN_base_account, is_default) VALUES ?",
                                        [records3], function(err_card, res_card, fields_card) {
                                            if(err_card) {
                                                console.log(err_card)
                                                throw err_card
                                            }
                                        })
                                    }
                                }) 
                            }
                            console.log(res);
                        });
                        
                    }
					//alert('Form received!');
                    //res.json('Form received');
                    res.redirect('back');
	            })
            } else { // aici e cazul cand utilizatorul exista deja in baza de date cu emailul introdus
                res.json('Invalid email address! This email address is already being used. Please register using a new email address. :( Did you mean to sign in?')
            }
        })
})



/// SIGN IN
app.post('/sign-in',(req, res)=>{
    /* get data from form */
    var {email, password} = req.body;
    /* check if there is already an account tied to given email address */
    con.query("SELECT first_name, surname FROM user WHERE email LIKE '%" + email + 
            "%'" + " AND password LIKE '%" + password + "%'", function(err_dtb, result_dtb, fields_dtb) {
        if (err_dtb) throw err_dtb;
        /* check if credentials match any entry in database */
        if (result_dtb[0] != null) {
            con.query("UPDATE user set isOnline = 1 where email LIKE '%" + email + 
            "%'" + " AND password LIKE '%" + password + "%'", function(err_dtb2, result_dtb2, fields_dtb) {
                if (err_dtb2) throw err_dtb2;
            })
            res.redirect('back');
            //res.json("SUCCES, user " + result_dtb[0]['first_name'] + " " + result_dtb[0]['surname'] + " is logged in")
        } else {
            res.json('Invalid email/password combination! Please try again.')
            res.json('Did you mean to sign up?')
        }
    })
})




app.listen(3001,()=>{
  console.log("Port 3001");
})