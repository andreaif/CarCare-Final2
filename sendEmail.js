var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: "miaella755@gmail.com",
    pass: "1111111we"
  },
  tLsL: {
    rejectUnauthorized: false
  }
});

function sendMail(data) {
  let getMail = {
    from: '"MiaElla" <miaella755@gmail.com',
    to: data.userEmail,
    subject: "CarCare: Maintenance Due " + data.nextservicedue,
    text:
      "Do your next " + data.typeofmaintenance + " on " + data.nextservicedue
  };

  transporter.sendMail(getMail, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("message sent");
    console.log(info);
  });
}

module.exports = sendMail;
