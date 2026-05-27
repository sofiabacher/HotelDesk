const { Resend } = require('resend')
const { email } = require('../config')

const resend = new Resend(process.env.RESEND_API_KEY)

const transporter = {
    sendMail: async ({ to, subject, html, from }) => {
        return await resend.emails.send({
            from: from || email.from,
            to,
            subject,
            html
        })
    }
}

module.exports = transporter
