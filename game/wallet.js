function submitEntry() {
    var username = document.getElementById('myTextField').value;
    var userMoney = localStorage.getItem("score456566")
    if (textValue.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    // URL of your deployed Google Apps Script Web App (replace with your actual URL)
    var url = 'https://script.google.com/macros/s/AKfycbxuCu_rhNL81rlg0IVv7aLDNwOYRu4ujkdg-68Yih8-hszlRJU3IZXdv2rKdUeeJOy2/exec';

    // Send the data to the Google Apps Script Web App via a POST request
    fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
            'entry': userMoney ,
            'username': username
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