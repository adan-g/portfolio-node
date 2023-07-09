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
        host: process.env.EMAIL_HOST,
        port: process.EMAIL_PORT,
        secure: false,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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

    req.flash('success_msg', 'Message sent')
    res.redirect('/#contact');
}