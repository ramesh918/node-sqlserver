
let database = require('../data/dataOperation')
module.exports.insertData = (req, res)=>{
  try {
    let {name , author, releaseDate} = req.body

    let query = `INSERT INTO [r10x-test].dbo.book_master VALUES (
        ${name},
        ${author},
        ${releaseDate}

    )`

    var insertResult = database.sqlQuery(query)

    res.send({ status: true, message: 'success', bookId: insertResult.book_id })
  }
  catch(e)
  {
      res.send({status: false, message: "unsuccessful"})
  }


}