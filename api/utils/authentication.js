const jwt = require('jsonwebtoken');

const createJwtToken = user => {
    return jwt.sign(user, '123456', {
        expiresIn: "1h"
    })
}

module.exports = {createJwtToken}