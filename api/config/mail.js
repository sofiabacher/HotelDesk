const nodeMalier = require('nodemailer')
const { email } = require('../config')

const transporter = nodeMalier.createTransport({
    host: email.host,
    port: email.port,
    secure: false,
    auth: {
        user: email.user,
        pass: email.password
    },
    tls: {
        rejectUnauthorized: false
    }
})

transporter.verify(function(error, success) {
    if (error) {
        console.log("SMTP ERROR:", error)
    } else {
        console.log("SMTP READY")
    }
})

module.exports = transporter
