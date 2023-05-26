const express = require('express')
const app = express();
require('dotenv').config({ debug: true });
const PORT = 3333 || process.env.PORT;
const nodemailer = require('nodemailer');

async function main () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
    });
    
   
    
    
    let info = await transporter.sendMail({
        from: '<freefuerza@gmail.com>',
        to: "freefuerza@gmail.com",
        subject: "nodemailer project",
        text: "<b> Hello World: </b>"
    });
}

main().then((info) => {
    return info;
}).catch(console.error);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
