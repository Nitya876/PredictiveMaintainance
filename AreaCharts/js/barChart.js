const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['C', 'C++', 'Pyhton', 'Java', 'JavaScript', 'C#'],
      datasets: [{
        label: '# languages',
        data: [20, 30, 50, 20, 60, 10],
       
      },
      {
        data:[30,40,10,20,40,10]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
    options:{
      responsive:true
    }
  });