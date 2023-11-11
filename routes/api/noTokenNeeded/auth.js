const express = require("express")
const router = express.Router()

const userModel = require("../../../model/user.model")
const trainModle = require("../../../model/trainingProfile.model")

const userValidation = require("../../../validation/auth.validation")
const ErrorHandler = require("../../../helpFunctions/errorHandler")

// 
let BMICalculation = require("../../../helpFunctions/BMICalc")

let bcryptFile = require("../../../config/bcrypt")


router.post("/register", async (req,res)=>{
    try {
        let {firstName, lastName, email, password} = req.body
        console.log(req.body)
        let validateData = await userValidation.validateAuthSchema(req.body)
        const findUserByEmail = await userModel.findUserByEmail(validateData.email)
        if (findUserByEmail) {
            
            throw new ErrorHandler("DB", ["Email used"])
        } else {
            let hashedPassword = await bcryptFile.createHash(validateData.password)
            password = hashedPassword
            const insertNewUser = await userModel.createNewUser({firstName,lastName,email,password})
            if (insertNewUser) {
                res.status(200).json({userMSG:"New User Created",insertNewUser})
            } else {
                throw new ErrorHandler("DB", ["Failed to create user"])
            }
        }
        


          
        
 
    // const newUser = await userModel.createNewUser({firstName,lastName,email,password,height})
    //     console.log(newUser)
    //     let userID= newUser._id
    //     console.log("user ID: ", userID)


    //    let test = BMICalculation(62.6,1.89)
    //    console.log(test)

    //    let find= await userModel.findByID(userID)
    //    res.json(find)


        // let Info = {
        //     userID:"ok22",
        //     exName:"name",
        //     ex: [{

        //     setNumber:1,
        //     repNumber: 2,
        //     prevW:2,
        //     currentW:4,

        //     }]
            
        // }
        // const addTrain = await trainModle.createNewTrain(Info)
        // console.log("new training: ", addTrain)
 

    }catch(err){
        
        console.log(err)
        res.status(400).json({answer:"Error in route",err})

    }


    
})

router.get("/noToken", async (req,res)=>{
    try {
        console.log("data: ", req.body)
        const userInfo = req.body
        const newUser = await userModle.createNewUser(userInfo)

        console.log(newUser)

 

    }catch(err){
        
        console.log(err)
        res.json({answer:"ggg"})

    }


    
})

router.get("/", (req,res)=>{
    res.json("first page")
})




module.exports = router