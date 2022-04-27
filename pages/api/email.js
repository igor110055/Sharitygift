import nodemailer from 'nodemailer'

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'jamesdream0724@gmail.com',
        pass: process.env.MAIL_PASSWORD,
      }
    })
    const mailData = {
      from: "Sharity's Gift<jamesdream0724@gmail.com>",
      to: req.body.email,
      subject: `Thank you for your donation`,
      text: "donation to "+req.body.title,
      html: `${req.body.txhash}`
    }
    let info = await transporter.sendMail(mailData)
    res.status(200)
}