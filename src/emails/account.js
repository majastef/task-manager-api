const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "majastefa11@gmail.com",
        pass: "zixr wuek oaie izgm"
    }
})

const sendWelcomeEmail = (email, name) => {
    const mailOptions = {
        from: "majastefa11@gmail.com",
        to: email,
        subject: "Welcome to the app!",
        text: `Thanks for joining in, ${name}! Let me know how you get along with the app.`
    }

    transporter.sendMail(mailOptions, (error, res) => {
        if(error) {
            console.log('Error: ', error)
        } else {
            console.log('Welcome e-mail sent!')
        }
    })
}

const sendCancelationEmail = (email, name) => {
    const mailOptions = {
        from: "majastefa11@gmail.com",
        to: email,
        subject: "Cancelation completed",
        text: `Goodbye ${name}! Is there anything we could've done to have kept you on board?`
    }

    transporter.sendMail(mailOptions, (error, res) => {
        if(error) {
            console.log('Error: ', error)
        } else {
            console.log('Cancelation e-mail sent!')
        }
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}