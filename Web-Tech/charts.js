// charts.js

// Data for the chart
var data = {
    labels: ['Data Centers', 'Aviation', 'Shipping'],
    datasets: [{
        label: 'Global Carbon emmisions of different industries',
        data: [4.26, 2.79, 2.32], // Placeholder data
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
    }]
};

// Configuration for the chart
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
