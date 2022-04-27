import nodemailer from 'nodemailer'

export default async (req, res) => {
    console.log(process.env.MAIL_PASSWORD)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
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
    let info = await transporter.sendMail(mailData)
    res.status(200)
}