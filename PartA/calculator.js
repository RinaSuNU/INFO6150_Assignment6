$(document).ready(function(){
    const username = sessionStorage.getItem("username");
    if (username) {
        $("#usernameDisplay").text(username);
    }

    function validateNumber(value, errorId) {
        if (!value) {
            $(errorId).text("This field is required");
            return "This field is required";
        }
        if (isNaN(value)) {
            $(errorId).text("Must be a number");
            return "Must be a number";
        }
        if (!isFinite(value)) {
            $(errorId).text("Must be a finite number");
            return "Must be a finite number";
        }
        $(errorId).text("");
        return "";
    }

    function calculate(operation) {
        const num1 = $("#num1").val();
        const num1Error = validateNumber(num1, "#num1Error");
        const num2 = $("#num2").val();
        const num2Error = validateNumber(num2, "#num2Error");

        if (num1Error || num2Error) return;

        let result;
        switch (operation) {
            case 'add': result = parseFloat(num1) + parseFloat(num2); break;
            case 'subtract': result = parseFloat(num1) - parseFloat(num2); break;
            case 'multiply': result = parseFloat(num1) * parseFloat(num2); break;
            case 'divide': result = num2 !== 0 ? parseFloat(num1) / parseFloat(num2) : 'Infinity'; break;
        }
        $("#result").val(result);
    }

    $("#addButton").click(() => calculate('add'));
    $("#subtractButton").click(() => calculate('subtract'));
    $("#multiplyButton").click(() => calculate('multiply'));
    $("#divideButton").click(() => calculate('divide'));
});