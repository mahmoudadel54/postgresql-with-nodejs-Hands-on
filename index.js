//how to connect to postgres from nodejs

//1- get Client object from pg package
const { Client } = require('pg');

//2- create an object of client and fill all mandatory params:
//user[must], pass[must], database name[optional], port[optional], host[optional],
const client = new Client({
    user:'postgres',         //enter username of database
    password:'admin',       //enter passweord of db
    host:'localhost',       //host name of the machine where the postgres db is installed 
    port:5432,              //here is the port number: 4532 is the defualt, see this file --> 
                            //Program Files\PostgreSQL\${VERSION_NUMBER}\data\postgresql.conf
    database:'test',        //database name that you want to connect to
});

// make a connection
client.connect()

.then(()=>{
    console.log("Succesfully Connected");
})
//we can write query like that: "SELECT * from wcities WHERE city='dubai' OR country='eg'"
//but the best way to avoid query injection use the below approach

.then(()=>client.query("SELECT * from wcities WHERE city=$1 OR country=$2",['dubai', 'eg'])
.then(results=>console.table(results.rows)))
.catch(e=>console.log("error",{e}))
.finally(()=>client.end())




//connect with async await 
// const { Client } = require('pg')
// const connectDB = async()=>{
//     const client = new Client({
//         user:'postgres',         //enter username of database
//     password:'admin',       //enter passweord of db
//     host:'localhost',       //host name of the machine where the postgres db is installed 
//     port:5432,              //here is the port number: 4532 is the defualt, see this file --> 
//                             //Program Files\PostgreSQL\${VERSION_NUMBER}\data\postgresql.conf
//     database:'test',        //database name that you want to connect to
//     })
//     await client.connect()
//     const res = await client.query("SELECT * from wcities WHERE city=$1 OR country=$2",['dubai', 'eg'])
//     console.table(res.rows) // Hello world!
//     await client.end()
// }

// connectDB()