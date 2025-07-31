import React, { useState } from 'react';

function DreamForm({ onAddDream }) {
    const [dreamText, setDreamText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dream: dreamText }),
            });

            if (!response.ok) {
                throw new Error('Failed to analyze dream');
            }

            const data = await response.json();
            onAddDream(data);
            setDreamText('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="dream-form">
            <textarea
                placeholder="Describe your dream..."
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                rows={4}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze Dream'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default DreamForm;
