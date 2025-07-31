import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

function MoodChart({ dreams }) {
    const moodCounts = dreams.reduce((acc, dream) => {
        acc[dream.mood] = (acc[dream.mood] || 0) + 1;
        return acc;
    }, {});

    const moods = ['Happy', 'Neutral', 'Confused', 'Sad', 'Scary'];
    const counts = moods.map((mood) => moodCounts[mood] || 0);

    const data = {
        labels: moods,
        datasets: [
            {
                label: 'Dream Mood Counts',
                data: counts,
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336', '#9c27b0'],
            },
        ],
    };

    return (
        <div className="mood-chart">
            <Bar data={data} />
        </div>
    );
}

export default MoodChart;
