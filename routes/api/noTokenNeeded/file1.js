const express = require("express")
const router = express.Router()


router.get("/noToken", (req,res)=>{
    res.json({answer:"noToken1"})
})

router.get("/", (req,res)=>{
    res.json("first page")
})




module.exports = router