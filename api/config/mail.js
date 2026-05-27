const nodeMalier = require('nodemailer')
const { email } = require('../config')

const transporter = nodeMalier.createTransport({
    service: "gmail",
    auth: {
        user: email.user,
        pass: email.password
    }
})

module.exports = transporter
