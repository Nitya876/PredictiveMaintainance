document.addEventListener("DOMContentLoaded", function() {
    const chartsContainer = document.getElementById('chartsContainer');
    const datasets = dataList;

    for (let index = 0; index < datasets.length; index++) {
        const dataset = datasets[index];

        // Create a container for each chart and details
        const container = document.createElement('div');
        container.classList.add('chart-container');
        chartsContainer.appendChild(container);

        // Create canvas for the chart
        const canvas = document.createElement('canvas');
        canvas.id = `myChart${index + 1}`;
        canvas.setAttribute('aria-label', 'chart');
        canvas.setAttribute('role', 'img');
        canvas.style.width = '400px';
        canvas.style.height = '300px';
        container.appendChild(canvas);

        // Create details div to display additional station details
        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = `
            <h3>${dataset.stationName}</h3>
            <p>${dataset.description}</p>
            <p>Station Name: ${dataset.stationName}</p>
            <p>Sensor ID: ${dataset.sensorID}</p>
            <p>Installed Location: ${dataset.installedLocation}</p>
        `;
        detailsDiv.classList.add('chart-details');
        container.appendChild(detailsDiv);
       

        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dataset.labels,
                stationID: dataset.stationID,
                datasets: [{
                    label: `Chart ${index + 1}`,
                    stationID:`Station Id: ${index}`,
                    data: dataset.data,
                    fill: true,
                    backgroundColor: "rgba(146, 207, 242, 0.35)", // Area color
                    borderColor: 'rgba(255, 99, 132, 1)', // Border color
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
