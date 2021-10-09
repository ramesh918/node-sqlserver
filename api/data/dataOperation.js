let sql = require('mssql');

let serverDetails = require('./config.json')
let config = {
    user:serverDetails.sqlServer.username ,
    password: serverDetails.sqlServer.password,
    server: serverDetails.sqlServer.host,
    port: serverDetails.sqlServer.port,
    database: serverDetails.sqlServer.databaseName,
    options: {
      encrypt: false
    }
  };


let controller = {}

controller.sqlQuery = async function(query)
{
  let connectionResult = await sql.connect(config)
  console.log(connectionResult)
  let  result = await sql.query(query)
  return result
}


module.exports = controller

