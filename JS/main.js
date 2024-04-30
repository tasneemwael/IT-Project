function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

document.getElementById('year').textContent = new Date().getFullYear();
function scrollToSection(sectionNum) {
    var section = document.getElementById('section' + sectionNum);
    section.scrollIntoView({ behavior: 'smooth' });
}

function sendEmail() {
    var fullname = document.getElementById('fullname').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var problemDescription = document.getElementById('problem').value;
    var topic = document.querySelector('input[name="topic"]:checked').value;

    var bodyContent = "Full Name: " + fullname + " " +
        "Mobile Phone: " + mobile + " " +
        "Email: " + email + " " +
        "Topic: " + topic + " " +
        "Problem Description: " + problemDescription;

    var mailtoLink = 'mailto:Tasneem.wael119@gmail.com?subject=Customer Support Request&body=' + encodeURIComponent(bodyContent);
    window.location.href = mailtoLink;
}
function validateForm() {
    var fullname = document.getElementById('fullname').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var problem = document.getElementById('problem').value;

    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any field is empty or email format is incorrect
    if (fullname === "" || mobile === "" || email === "" || problem === "" || !emailRegex.test(email)) {
        alert("Please fill out all fields correctly.");
        return false;
    }
    return true;
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent form submission if validation fails
    if (!validateForm()) {
        event.preventDefault();
    }
});
function makePhoneCall() {
    // Replace this with the code to initiate a phone call using the telephone number
    window.open('tel:1234567890');
}


