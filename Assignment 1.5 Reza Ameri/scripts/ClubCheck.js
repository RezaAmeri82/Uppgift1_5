let vip = true; // boolean variable
let age = 17; // initial number variable

document.getElementById('enterBtn').addEventListener('click', function() {
    // Reassign age and vip values from input and checkbox
    age = parseInt(document.getElementById('ageInput').value);
    vip = document.getElementById('vipCheckbox').checked;

    // Check if VIP is true
    if (vip) {
        alert('Welcome in my best VIP customer :)');
    } else if (age >= 18) {
        // Check if age is 18 or above
        alert('Access granted');
    } else {
        // If age is below 18 and not VIP
        alert('Access denied');
    }
});