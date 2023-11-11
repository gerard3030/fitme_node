const express = require("express")
const router = express.Router()


const noToken = require("./api/noTokenNeeded/auth")
const token = require("./api/tokenNeeded/file2")

router.use("/", noToken )
router.use("/admin", token)





module.exports = router