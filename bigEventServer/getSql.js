module.exports = (sql,params) => {
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        port: '3007',
        user: 'root',
        password: 'root',
        database: 'bigEvent'
    });
    return new Promise ((resolve,reject) => {
        conn.connect();
        conn.query(sql,params,(err,result) => {
            err ? reject(err) : resolve(result);
        });
        conn.end()  
    }).catch(err => console.log(err))
}