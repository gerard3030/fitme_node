const express = require("express")
const router = express.Router()


router.get("/token", (req,res)=>{
    res.json("token2")
})




module.exports = router