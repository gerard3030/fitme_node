const bcrypt = require('bcryptjs');



const createHash = (purePassword)=>bcrypt.hashSync(purePassword, 10)

  

module.exports = {
    createHash,
}
