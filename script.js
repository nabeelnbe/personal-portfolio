function sendEmail () {
    var params = {
        from_name : document.getElementById("name").value,
        Email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_u9ycj6h","template_f3kszle",params).then(function(res){
        alert("Success!" +res.status);
    })
}