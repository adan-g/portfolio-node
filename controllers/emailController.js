const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    const {name, email, subject, message} = req.body;
    const contentHTML = `
    <div>
        <p>name: ${name}</p>
        <p>email: ${email}</p>
        <p>subject: ${subject}</p>
        <p>message: ${message}</p>
    </div>`;

   
    let transporter = nodemailer.createTransport({
        host: 'server170.web-hosting.com',
        port: 465,
        secure: true,
        auth: {
        user: 'info@adangimenez.com',
        pass: '3LS%a;aO.dsF',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Adan Gimenez Portfolio <info@adangimenez.com>', 
        to: 'gimenezadan1@gmail.com',
        subject: "Portfolio Contact Form",
        html: contentHTML,
    });

    res.send('Message sent');
}