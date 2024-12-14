function submitEntry() {
    var textValue = document.getElementById('myTextField').value;
    
    if (textValue.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    // URL of your deployed Google Apps Script Web App (replace with your actual URL)
    var url = 'https://script.google.com/macros/s/AKfycbwO5EoytdANNTI3jJn1IZjA5vYIptvQgXqsdRem3lOWfdtgWEMnVezMrlgCq81VlO9Q/exec';

    // Send the data to the Google Apps Script Web App via a POST request
    fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
            'entry': textValue
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').innerText = "Your entry was submitted!";
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = "An error occurred.";
        console.error('Error:', error);
    });
}