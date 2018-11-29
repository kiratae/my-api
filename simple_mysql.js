const config = require('./config/config.js')
const mysql = require('mysql')
const db = mysql.createConnection(config.mysql_connect)

db.connect(function(err){
    if(err) throw err
    console.log('CONNECTED !')

    let sql = `SELECT * FROM pers_subjects`

    db.query(sql, function(err, result, fields){
        if(err) throw err
        console.log(result[0].sub_id)
        result.forEach(row => {
            console.log(`${row.sub_id} ${row.sub_code_th} ${row.sub_name_th}`)
        })
    })

})