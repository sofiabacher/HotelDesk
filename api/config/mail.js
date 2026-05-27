const { Resend } = require('resend')
const { email } = require('../config')

const resend = new Resend(process.env.RESEND_API_KEY)

const transporter = {
    sendMail: async ({ to, subject, html, from }) => {
        try {
            const result = await resend.emails.send({
                from: "HotelDesk <bacher.sofiaet36@gmail.com>",
                to,
                subject,
                html
            })

            console.log("RESEND OK:", result)
            return result

        } catch (err) {
            console.log("RESEND ERROR:", err)
            throw err
        }
    }
}

module.exports = transporter
