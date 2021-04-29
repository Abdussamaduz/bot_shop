const nodeMailer = require('nodemailer')

const transfer = nodeMailer.createTransport({
    // service: "gmail", // yuboriladigan mailni servic nomi
    host: "gsmtp.gmail.com",
    port: 587,
    secure: false,
    auth: { // yuboradigan userning mail malumotlari
        user: "abdussamadwebdeveloper@gmail.com",
        pass: "sifrehatali95"
    },
    tls: {
        rejectUnauthorized: false
    }
});

const mailInfo = {
    from: "abdussamadwebdeveloper@gmail.com",
    to: "kamoliddin135@gmail.com",
    subject: "NodeJs ile mail",
    text: "NodeJs ile ilk mailimi gonderiyorum!",
    html: "<button>cancel</button> </br> <button>ok</button>"
}

transfer.sendMail(mailInfo, (error, info) => {
    if(error) console.log(error);
    else console.log("yuborildi");
})