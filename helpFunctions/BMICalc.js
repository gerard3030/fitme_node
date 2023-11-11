
let BMICalculation = (weight,height)=>{
    let BMI = weight/(Math.pow(height,2))
    BMI = 10
    BMI = BMI.toFixed(2)
    return BMI
}

module.exports = BMICalculation