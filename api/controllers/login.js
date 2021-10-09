let database = require("../data/dataOperation")
let jwt = require('jsonwebtoken')
let controller = {}


controller.login = async (req, res)=>{
    let {username, password} = req.body

    let query = `SELECT * FROM [r10x-test].dbo.login where username = ${username}`
   let data = await database.sqlQuery(query)
    if (data.length == 0)
    {
        res.send("There is no user with this username")
    }
    else
    {
        let passwordInDb = data[0].password
        if(password === passwordInDb)
        {

            let token = jwt.sign({username:username}, "the screat", {expiresIn:60})
            res.json({ status: true,
                message: "success",
                token: token,
                userId: data[0].user_id,
                name: data[0].full_name,
                email: data[0].email})
        }
        else
        {
           res.send("Please provide Right credentials")
        }
    }

}

controller.isAuthenticated = (req, res, next)=>{
  let token = req.headers.authToken

  jwt.verify(token, "the screat", (err, data)=>{
      if(err){
          res.send("Invalid token")
      }
      else
      {
          next()
      }
  })

}

module.exports = controller