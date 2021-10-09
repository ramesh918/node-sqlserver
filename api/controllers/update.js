
let database = require('../data/dataOperation')
module.exports.updateData = async (req, res)=>{
  try {
    let {bookId,name , author, releaseDate} = req.body

    let query = `
    UPDATE [r10x-test].dbo.book_master
SET name = ${name}, author = ${author}, releaseDate = ${releaseDate}
WHERE book_id = ${bookId};
    `

    var updateResult = await database.sqlQuery(query)

    res.send({ status: true, message: 'success', bookId: bookId })
  }
  catch(e)
  {
      res.send({status: false, message: "unsuccessful"})
  }


}