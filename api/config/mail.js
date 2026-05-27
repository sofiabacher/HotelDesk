const nodeMalier = require('nodemailer')
const { email } = require('../config')

const transporter = nodeMalier.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // 🔥 clave (SSL directo)
    auth: {
        user: email.user,
        pass: email.password
    },
    tls: {
        rejectUnauthorized: false
    }
})

transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP ERROR:", error)
    } else {
        console.log("SMTP READY")
    }
})

module.exports = transporter
