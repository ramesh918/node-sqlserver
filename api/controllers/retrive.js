
let database = require('../data/dataOperation')
module.exports.getData = async (req, res)=>{
  try {
    let {name , author, releaseDate} = req.body

    let booksQuery = `SELECT *  [r10x-test].dbo.book_master`
    let userQuery = `SELECT *  [r10x-test].dbo.login`


    var booksData = await database.sqlQuery(booksQuery)
    var usersData = await database.sqlQuery(userQuery)

    res.send({ user_details: usersData,
        books: booksData
  })
}
  catch(e)
  {
      res.send({status: false, message: "unsuccessful"})
  }


}