function submitEntry() {
    var textValue = document.getElementById('myTextField').value;
    var userMoney = localStorage.getItem("score456566")
    if (textValue.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    // URL of your deployed Google Apps Script Web App (replace with your actual URL)
    var url = 'https://script.google.com/macros/s/AKfycbw82N-4iZQFNO0AHaS5lAequ5spDlpovI7Bx5wg0RTr2aDF9EoPhR-RgcFZq1vRiC92/exec';

    // Send the data to the Google Apps Script Web App via a POST request
    fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
            'entry': userMoney
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