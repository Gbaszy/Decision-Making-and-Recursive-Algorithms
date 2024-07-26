function calculateTicketPrice() {
    // Get the user input
    const ageInput = document.getElementById('ageInput').value;
    const userAge = parseInt(ageInput, 10);
    
    // Validate the input
    let resultText;
    if (isNaN(userAge) || userAge < 0) {
        resultText = 'Invalid age input. Please enter a valid number.';
    } else {
        // Determine the ticket price based on age
        let ticketPrice;
        if (userAge <= 12) {
            ticketPrice = 10;
        } else if (userAge >= 13 && userAge <= 17) {
            ticketPrice = 15;
        } else {
            ticketPrice = 20;
        }

        // Display the ticket price
        resultText = `Your ticket price is $${ticketPrice}`;
    }
    
    // Update the result div with the ticket price or error message
    document.getElementById('result').textContent = resultText;
}
