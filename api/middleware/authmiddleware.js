const jwt = require('jsonwebtoken')

const authentication = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1] || ''
    try {
        const verify = jwt.verify(token, '123456');
        req.verfiedUser = verify
        console.log("Verification Success!", verify);
        next()
    } catch (err) {
        console.log('Verification Failed');
        next()
    }
}
module.exports = {authentication}