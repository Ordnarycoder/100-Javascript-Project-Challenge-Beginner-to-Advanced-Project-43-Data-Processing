
async function fetchData() {
    try {
        const response = await fetch('data.json'); // Fetch the JSON file
        const data = await response.json(); // Convert response to JSON format
        processData(data); // Pass the data for processing
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function processData(data) {
    const filteredUsers = data.users.filter(user => user.age > 25); // Filter users above 25
    
    console.log("Users above 25:", filteredUsers); // Log result in console
    displayData(filteredUsers); // Display the filtered data in HTML
}


function displayData(users) {
    const outputDiv = document.getElementById('output'); // Select the output div
    outputDiv.innerHTML = '<h2>Filtered Users</h2>'; // Set a title
    
    users.forEach(user => {
        const userElement = document.createElement('p'); // Create a <p> element
        userElement.textContent = `${user.name} - ${user.age} years old`; // Set text content
        outputDiv.appendChild(userElement); // Append to the div
    });
}

document.addEventListener('DOMContentLoaded', fetchData);
