import Mailgen from "mailgen";
import nodemailer from "nodemailer"


const sendEmail= async (option)=>{
    const mailGenerator = new Mailgen({
        theme:"default",
        product:{
            name:"Task Manager",
            link:"https://taskmanagelink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(option.mailgenContent)
    const emailHTML = mailGenerator.generate(option.mailgenContent)


    const tranport = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: Number(process.env.MAILTRAP_SMTP_PORT),
        secure: Number(process.env.MAILTRAP_SMTP_PORT) === 465,
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail= {
        from : process.env.MAILTRAP_FROM_EMAIL || "mail.taskmanager@example.com",
        to:option.email,
        subject:option.subject,
        text:emailTextual,
        html:emailHTML
    }

    try{
        await tranport.sendMail(mail)
    }catch(error){
        console.error("Email service failed silently. Make sure that you have provided your MAILTRAP credentials in the .env file")
        console.error("Error : ", error)
    }
}


const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We're excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have question? Just reply to this email, we'd love to help",
    },
  };
};

const forgetPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions: "To reset your password click on the following",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have question? Just reply to this email, we'd love to help",
    },
  };
};

export { emailVerificationMailgenContent, forgetPasswordMailgenContent, sendEmail };