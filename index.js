//how to connect to postgres from nodejs

//1- get Client object from pg package
const { Client } = require('pg');

//2- create an object of client and fill all mandatory params:
//user[must], pass[must], database name[optional], port[optional], host[optional],
const client = new Client({
    user:'postgre',         //enter username of database
    password:'admin',       //enter passweord of db
    host:'localhost',       //host name of the machine where the postgres db is installed 
    port:5432,              //here is the port number
    database:'test',        //database name that you want to connect to
});

//make a connection
client.connect()

.then(()=>{
    console.log("Succesfully Connected");
})
.catch(e=>console.log("error",{e}))
.finally(()=>client.end())




//connect with async await 
// const { Client } = require('pg')
// const connectDB = async()=>{
//     const client = new Client({
//         user:'postgres',
//         password:'admin'
//     })
//     await client.connect()
//     const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//     console.log(res.rows[0].message) // Hello world!
//     await client.end()
// }

// connectDB()