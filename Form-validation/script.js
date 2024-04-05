function validateForm() {
    let isValid = true;

    let userType = document.getElementById('usertype').value;
    if (userType === "") {
        document.getElementById('usertype-error').innerHTML = "Please select a user type.";
        isValid = false;
    } else {
        document.getElementById('usertype-error').innerHTML = "";
    }

    let name = document.getElementById('name').value;
    if (name.trim() === "") {
        document.getElementById('name-error').innerHTML = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('name-error').innerHTML = "";
    }

    let password = document.getElementById('Password').value;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-+=^])(?!.*\s).{8,20}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').innerHTML = "Password must be 8-20 characters long and contain at least one digit, one uppercase letter, one lowercase letter, one special character, and no white spaces.";
        isValid = false;
    } else {
        document.getElementById('password-error').innerHTML = "";
    }

    let email = document.getElementById('email').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerHTML = "Enter a valid email address.It should have lowercase letters, no white spaces, . and @ symbols";
        isValid = false;
    } else {
        document.getElementById('email-error').innerHTML = "";
    }

    let phone = document.getElementById('phone').value;

    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').innerHTML = "Enter a valid 10-digit phone number.";
        isValid = false;
    } else if (/^(\d)\1{9}$/.test(phone)) {

        document.getElementById('phone-error').innerHTML = "Phone number cannot consist of repeating digits.";
        isValid = false;
    } else {
        document.getElementById('phone-error').innerHTML = "";
    }

    let accessibilityOptions = document.querySelectorAll('input[name="accessibility"]:checked');
    if (accessibilityOptions.length === 0) {
        document.getElementById('accessibility-error').innerHTML = "Please select at least one accessibility option.";
        isValid = false;
    } else {
        document.getElementById('accessibility-error').innerHTML = "";
    }

    return isValid;
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("Password");
    let passToggleBtn = document.getElementById("pass-toggle-btn");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passToggleBtn.classList.remove("fa-eye");
        passToggleBtn.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        passToggleBtn.classList.remove("fa-eye-slash");
        passToggleBtn.classList.add("fa-eye");
    }
}


