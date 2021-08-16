
//code from EMAILJS
function sendMail(contactForm) {
    emailjs.send("service_j32l2w9","template_o51c1wr", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "tourist_help": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    ); 
    return false;   
} 