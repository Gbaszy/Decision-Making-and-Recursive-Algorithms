function adviseClothing() {
    // Get user inputs
    const temperature = parseInt(document.getElementById('temperatureInput').value, 10);
    const isRaining = document.getElementById('rainingInput').value === 'yes';
    
    // Validate input
    if (isNaN(temperature)) {
        document.getElementById('result').textContent = 'Invalid temperature input. Please enter a valid number.';
        return;
    }

    let advice = '';

    // Determine clothing advice based on temperature and rain status
    if (temperature < 0) {
        advice = 'It is very cold. Wear a heavy winter coat, gloves, and a hat. Don\'t forget to wear waterproof clothing if it\'s raining.';
    } else if (temperature >= 0 && temperature <= 10) {
        advice = 'It is cold. Wear a warm coat and a scarf. If it\'s raining, make sure to wear waterproof clothing and an umbrella.';
    } else if (temperature > 10 && temperature <= 20) {
        advice = 'It is mild. A light jacket or sweater should be sufficient. If it\'s raining, carry an umbrella.';
    } else if (temperature > 20 && temperature <= 30) {
        advice = 'It is warm. Wear light clothing and stay hydrated. If it\'s raining, a light rain jacket might be useful.';
    } else {
        advice = 'It is hot. Wear lightweight, breathable clothing and stay cool. An umbrella can help if it\'s raining.';
    }

    // Append rain advice
    if (isRaining) {
        advice += ' Don\'t forget to stay dry!';
    }

    // Display the advice
    document.getElementById('result').textContent = advice;
}