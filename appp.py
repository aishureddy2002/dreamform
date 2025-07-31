from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to talk to this backend


@app.route('/api/analyze', methods=['POST'])
def analyze_dream():
    data = request.json
    dream_text = data.get('dream', '')
    if not dream_text:
        return jsonify({'error': 'No dream text provided'}), 400

    blob = TextBlob(dream_text)
    polarity = blob.sentiment.polarity

    if polarity > 0.3:
        mood = 'Happy'
    elif polarity > 0.05:
        mood = 'Neutral'
    elif polarity > -0.1:
        mood = 'Confused'
    elif polarity > -0.5:
        mood = 'Sad'
    else:
        mood = 'Scary'

    return jsonify({
        'mood': mood,
        'polarity': polarity,
        'dream': dream_text
    })


if __name__ == '__main__':
    app.run(debug=True)
