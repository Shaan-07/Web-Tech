// piechart.js

$(document).ready(function(){
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['AWS', 'Google Cloud', 'Azure', 'Others'],
            datasets: [{
                label: 'Market Share',
                data: [32, 7, 19, 42],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(25, 20, 6, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(25, 20, 6, 0.5)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Market Share of Cloud Computing Services'
            }
        }
    });
});
