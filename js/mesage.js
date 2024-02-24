document.getElementById("send-button").addEventListener("click", function() {
    const textarea = document.getElementById("textarea").value;
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementById("error-msg");

    if (textarea.trim() === "" || email.trim() === "") {
        errorMsg.textContent = "Te rugăm să completezi ambele câmpuri.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg.textContent = "Te rugăm să introduci o adresă de email validă.";
        return;
    }

    errorMsg.textContent = "";

    const nodemailer = require('nodemailer');

// Configurare transporter pentru a trimite e-mailuri folosind serviciul SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adresa.email@gmail.com', // Adresa de e-mail a expeditorului
        pass: 'parola' // Parola pentru adresa de e-mail a expeditorului
    }
});

// Definirea opțiunilor pentru e-mailul de trimis
const mailOptions = {
    from: 'adresa.email@gmail.com', // Adresa de e-mail a expeditorului
    to: 'bogdanmaidanskii@gmail.com', // Adresa de e-mail a destinatarului
    subject: 'Subiectul e-mailului', 
    text: 'Aici este conținutul e-mailului.' // Conținutul e-mailului
};


transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log('Eroare la trimiterea e-mailului:', error);
    } else {
        console.log('E-mail trimis cu succes:', info.response);
    }
});

});
