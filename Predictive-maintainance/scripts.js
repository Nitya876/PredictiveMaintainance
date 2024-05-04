//Logout endpoint call
function logout() {
        // Make a GET request to the logout endpoint
        window.location.href = '/logout';
    }



    function changePasswordPopUp() {
      var cpDiv = document.getElementById("changePasswordPopUpDiv");
      cpDiv.style.display = (cpDiv.style.display === "block") ? "none" : "block";
      var profileBox = document.getElementById("profileBox");
      profileBox.style.marginTop = (cpDiv.style.display === "block") ? "2rem" : "2rem";
  }
  
      
    
      


// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}


// ------------For Header-left/Profile-------------

    function openProfile() {
        let profileBox = document.getElementById("profileBox");
        profileBox.style.display = (profileBox.style.display === "block") ? "none" : "block";
    }

/*for header-right*/

function toggleNavbar() {
  let navbar = document.getElementById("headerRight");
  navbar.classList.toggle("responsive");
}

//-------ADD USER POP_UP PAGE--------
document.getElementById("addUser").addEventListener("click", function() {
  document.getElementById("popupContainer").style.display = "block";
});

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

//-----FORM ACCESIBILITY------




new MultiSelectTag('access', {
  rounded: true,    // default true
  shadow: true,      // default false
  placeholder: 'Search',  // default Search...
  width:"50%",
  tagColor: {
      textColor: 'black',
      borderColor: 'gray',
      bgColor: '	#DCDCDC',
  },
  onChange: function(values) {
      console.log(values)
  }
})


// EXISTING USERS AND EXISTING OPERATORS

  document.addEventListener('DOMContentLoaded', function () {
        const existingUsersCard = document.getElementById('existing-users-card');
        const existingOperatorsCard = document.getElementById('existing-operators-card');
        const additionalInfoUsers = document.getElementById('additional-info-users');
        const additionalInfoOperators = document.getElementById('additional-info-operators');

        existingUsersCard.addEventListener('click', function () {
            additionalInfoUsers.classList.toggle('show');
            // Hide additional info for operators if it's open
            additionalInfoOperators.classList.remove('show');
        });

        existingOperatorsCard.addEventListener('click', function () {
            additionalInfoOperators.classList.toggle('show');
            // Hide additional info for users if it's open
            additionalInfoUsers.classList.remove('show');
        });
    });

// MAINTENANCE REQUIRED AND DONE
document.addEventListener('DOMContentLoaded', function () {
  const existingUsersCard = document.getElementById('maintenance-required');
  const existingOperatorsCard = document.getElementById('maintenance-done');
  const additionalInfoUsers = document.getElementById('additional-info-maintenance-req');
  const additionalInfoOperators = document.getElementById('additional-info-maintenance-done');

  existingUsersCard.addEventListener('click', function () {
      additionalInfoUsers.classList.toggle('show');
      additionalInfoOperators.classList.remove('show');
  });

  existingOperatorsCard.addEventListener('click', function () {
      additionalInfoOperators.classList.toggle('show');
      additionalInfoUsers.classList.remove('show');
  });
});



    
// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
  },
  yaxis: {
    title: {
      text: 'Count',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();



// AREA CHART
/*const areaChartOptions = {
  series: [
    // {
    //   name: 'Purchase Orders',
    //   data: [31, 40, 28, 51, 42, 109, 100],
    // },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 72, 41],
    },
  ],
  chart: {
    height: 250,
    width:350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {   
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();*/


function drawAreaChart(data, labels, targetElementId) {
  const areaChartOptions = {
    series: [
      {
        name: 'Sales Orders',
        data: data,
      },
    ],
    chart: {
      height: 250,
      width: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: labels,
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'Purchase Orders',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const areaChart = new ApexCharts(
    document.querySelector(`#${targetElementId}`),
    areaChartOptions
  );
  areaChart.render();
}

// Example usage:
const data = [11, 32, 45, 32, 34, 72, 41];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
drawAreaChart(data, labels, 'area-chart');





//Line Chart
var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#FF1654", "#247BA0"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: {
    width: [4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#FF1654"
      },
      labels: {
        style: {
          colors: "#FF1654"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#FF1654"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#247BA0"
      },
      labels: {
        style: {
          colors: "#247BA0"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#247BA0"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};

var chart = new ApexCharts(document.querySelector("#line-chart"), options);

chart.render();



function drawLineGraph(data, category){
	
}