export default function (req, res) {
    
    let nodemailer = require('nodemailer')
    console.log(process.env.MAIL_PASSWORD)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jamesdream0724@gmail.com',
        pass: process.env.MAIL_PASSWORD,
      }
    })
    const mailData = {
      from: 'jamesdream0724@gmail.com',
      to: req.body.email,
      subject: `Thank you for your donation`,
      text: "donation to "+req.body.title,
      html: `<div>${req.body.txhash}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
}