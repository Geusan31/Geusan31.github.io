function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "codebreaker399@gmail.com",
        Password : "password",
        To : 'raisaria341@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquery",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}