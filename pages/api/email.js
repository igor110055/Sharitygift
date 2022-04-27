import emailjs from 'emailjs-com';

export default (req, res) => {
    emailjs.send(
        'service_5z247od',
        'template_ljr01le',
        {
            name: "ddd",
            hash: "0X8789EWd",
            date: "dQQQd",
            time: "ddd",
            receiptId: "dsadadd",
            AMOUNT: "dd",
            toEmail: "jamesl.l90724@gmail.com",
        },
        'jona',
    )
    .then(({ status }) => {
        if (status === 200) {
            console.log('Message has been sent');
        } else {
            console.log('Unexpected status code returned from EmailJS, try again later');
        }
    }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        console.log("err occured");
    });
}