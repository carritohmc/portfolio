document.getElementById("emailForm").addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target; //this is the element that is getting the submit action.

    //get values here
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    //email js public key from accounts 
    emailjs.init("bzoIMetVFz5PKhbTI")

    const params = {
        from_email : email,
        from_name : name,
        subject : subject, 
        message : message 
    }

    if (!subject){
        const result = confirm("Subject is empty. Are you sure you want to send this email?")
        
        if (result === true) {
            
            sendEmail();
        } else {
            
        }
    } else {
        sendEmail(); 
    }
        
    function sendEmail(){
        //first is the email service id, the second is the template id, 
        emailjs.send("service_8u2tvei","template_5l4jjga",params)
        .then(function(response) {
            alert("Email was successfully sent");
            form.reset(); 
        }, function (error) {
            alarm("Error sending email");
        });
    }

});