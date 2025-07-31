function analyzeDream() {
    const dream = document.getElementById('dreamInput').value;

    fetch('http://127.0.0.1:5000/api/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dream })
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('result').textContent = "Error: " + data.error;
            } else {
                document.getElementById('result').textContent =
                    `Mood: ${data.mood} (Polarity: ${data.polarity.toFixed(2)})`;
            }
        })
        .catch(error => {
            document.getElementById('result').textContent = "Request failed.";
            console.error(error);
        });
}
