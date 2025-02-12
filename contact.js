function sendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        };
        emailjs.send('service_zly0h3i', 'template_ecs3owe', params)
        .then(function(res) {
            alert('Message sent successfully!', res.status) 
        })
}
  