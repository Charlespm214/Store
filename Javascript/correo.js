const express = require("express");
const nodemailer = require("nodemailer")
// Creación del transporte
const transporter = nodemailer.createTransport({
// Servicios, datos, credenciales
service:"gmail",
auth:{
    user:"charlesthebest@gmail.com",
    pass:"ezkn dwdy lcdk lfzp"
    },  
tls:{
    rejectUnauthorized:false
    }
});
// De donde sale el correo, para donde.
const mailOptions={
    from: "charlesthebest@gmail.com",
    to: "caelpacri@hotmail.com",
    cc: "charlesthebest@gmail.com",
    subject: "Mensaje enviado desde Shop CP",
    text: enviarForm()
}
// Enviar correo
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        alert("Error al enviar el correo:", error);
    }
    else{
        alert("Correo enviado de forma correcta");
    }
})

