const jwt = require('jsonwebtoken')

const generateToken = (id, email, role) => {
    return jwt.sign({ id: id, email: email, role: role}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

module.exports = generateToken