var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const app = express();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var transport = {
    host: 'smtp.live.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server is ready to take emails');
    }
});

app.use(express.json()); app.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    var mail = {
        from: name,
        to: 'ericmckey22@hotmail.com',
        subject: "Contact Form Request",
        
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        }
        else {
            res.json({
                msg: 'success'
            })
        }
    })
})

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(8080);