$(document).ready(function(){
    function validateField(fieldId, errorId, validationFn) {
        const value = $(fieldId).val();
        //console.log("Validating field:", fieldId, "Value:", value);
        const errorMessage = validationFn(value);
        //console.log("Error message:", errorMessage);
        $(errorId).text(errorMessage);
        return !errorMessage;
    }
    function validateEmail(value) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        if (!value) return "Email is required";
        if (!emailPattern.test(value)) return "Invalid Northeastern email";
        return "";
    }

    function validateUsername(value) {
        if (!value) return "Username is required";
        if (/[^a-zA-Z]/.test(value)) return "Username should not have numbers or special characters";
        return "";
    }

    function validatePassword(value) {
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        return "";
    }

    function validateConfirmPassword(value) {
        const password = $("#password").val();
        if (value !== password) return "Passwords do not match";
        return "";
    }

    $("input").on("input", function() {
        const isEmailValid = validateField("#email", "#emailError", validateEmail);
        const isUsernameValid = validateField("#username", "#usernameError", validateUsername);
        const isPasswordValid = validateField("#password", "#passwordError", validatePassword);
        const isConfirmPasswordValid = validateField("#confirmPassword", "#confirmPasswordError", validateConfirmPassword);

        $("#loginButton").prop("disabled", !(isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid));
    });

    $("#loginButton").click(function() {
        const username = $("#username").val();
        sessionStorage.setItem("username", username);
        window.location.href = "CalculatorPage.html";
    });
})