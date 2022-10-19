const route = require("express").Router()
const connection = require("../config/db")

function changeConnection(db) {

}

// Get total sales http://localhost:8080/sales/totalsales
route.post("/totalsales", async (req,res) => {
    try {
        console.log(req)
        const business_name = req.body.name;
        connection.query('SELECT * FROM fts_users WHERE business_name = ?', [business_name], (err, result, feilds) => {
            if(err) throw err;
            console.log(result[0].db_name)
            res.send(result[0].db_name)
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = route