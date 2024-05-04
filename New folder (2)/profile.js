//Logout endpoint call
function logout() {
    // Make a GET request to the logout endpoint
    window.location.href = '/logout';
}


//for left section to move to the associated section
function navigateTo(url) {
    window.location.href = url;
    closeSidebar();
}



//-------CHANGE PASSWORD POP_UP PAGE--------


function changePasswordPopUp() {
  var cpDiv = document.getElementById("changePasswordPopUpDiv");
  cpDiv.style.display = (cpDiv.style.display === "block") ? "none" : "block";
  var profileBox = document.getElementById("profileBox");
  profileBox.style.marginTop = (cpDiv.style.display === "block") ? "2rem" : "2rem";
}



// ------------For Header-left/Profile-------------

function openProfile() {
var profileBox = document.getElementById("profileBox");
profileBox.style.display = (profileBox.style.display === "block") ? "none" : "block";
}

//for header-right

function toggleNavbar() {
let navbar = document.getElementById("headerRight");
navbar.classList.toggle("responsive");
}

//-------ADD USER POP_UP PAGE--------
document.getElementById("addUser").addEventListener("click", function() {
document.getElementById("popupContainer").style.display = "block";
fetchCounts();
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
    // Check if additional info for users is currently visible
    const isUsersInfoVisible = additionalInfoUsers.classList.contains('show');
    
    // Close additional info for users if it's already open, otherwise open it
    if (isUsersInfoVisible) {
        additionalInfoUsers.classList.remove('show');
    } else {
        additionalInfoUsers.classList.add('show');
        // Hide additional info for operators if it's open
        additionalInfoOperators.classList.remove('show');
    }
});

existingOperatorsCard.addEventListener('click', function () {
    // Check if additional info for operators is currently visible
    const isOperatorsInfoVisible = additionalInfoOperators.classList.contains('show');
    
    // Close additional info for operators if it's already open, otherwise open it
    if (isOperatorsInfoVisible) {
        additionalInfoOperators.classList.remove('show');
    } else {
        additionalInfoOperators.classList.add('show');
        // Hide additional info for users if it's open
        additionalInfoUsers.classList.remove('show');
    }
});

});


/*to open the tables of maintenance tables */

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


/*
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

chart.render();*/

//
var dataSet = [
// Data for PRODUCT A
[
[new Date("2024-04-08T00:00:00").getTime(), 100],
[new Date("2024-04-08T01:00:00").getTime(), 140],
[new Date("2024-04-08T02:00:00").getTime(), 105],
[new Date("2024-04-08T03:00:00").getTime(), 170],
[new Date("2024-04-08T04:00:00").getTime(), 115],
[new Date("2024-04-08T05:00:00").getTime(), 130],
[new Date("2024-04-08T06:00:00").getTime(), 195],
[new Date("2024-04-08T07:00:00").getTime(), 135],
[new Date("2024-04-08T08:00:00").getTime(), 140],
[new Date("2024-04-08T09:00:00").getTime(), 145],
[new Date("2024-04-11T10:00:00").getTime(), 150],
[new Date("2024-04-12T11:00:00").getTime(), 155],
[new Date("2024-04-13T12:00:00").getTime(), 160],
[new Date("2024-04-14T12:30:00").getTime(), 165],
[new Date("2024-04-15T00:00:00").getTime(), 170],
[new Date("2024-04-16T00:00:00").getTime(), 175],
[new Date("2024-04-17T00:00:00").getTime(), 180],
[new Date("2024-04-18T00:00:00").getTime(), 185],
[new Date("2024-04-19T00:00:00").getTime(), 190],
[new Date("2024-04-20T00:00:00").getTime(), 195]
],
// Data for PRODUCT B
[
[new Date("2024-04-01T00:00:00").getTime(), 90],
[new Date("2024-04-02T00:00:00").getTime(), 85],
[new Date("2024-04-03T00:00:00").getTime(), 80],
[new Date("2024-04-04T00:00:00").getTime(), 95],
[new Date("2024-04-05T00:00:00").getTime(), 100],
[new Date("2024-04-06T00:00:00").getTime(), 105],
[new Date("2024-04-07T00:00:00").getTime(), 110],
[new Date("2024-04-08T00:00:00").getTime(), 115],
[new Date("2024-04-09T00:00:00").getTime(), 120],
[new Date("2024-04-10T00:00:00").getTime(), 125],
[new Date("2024-04-11T00:00:00").getTime(), 130],
[new Date("2024-04-12T00:00:00").getTime(), 135],
[new Date("2024-04-13T00:00:00").getTime(), 140],
[new Date("2024-04-14T00:00:00").getTime(), 145],
[new Date("2024-04-15T00:00:00").getTime(), 150]
],
// Data for PRODUCT C
[
[new Date("2024-04-01T00:00:00").getTime(), 80],
[new Date("2024-04-02T00:00:00").getTime(), 85],
[new Date("2024-04-03T00:00:00").getTime(), 90],
[new Date("2024-04-04T00:00:00").getTime(), 95],
[new Date("2024-04-05T00:00:00").getTime(), 100],
[new Date("2024-04-06T00:00:00").getTime(), 105],
[new Date("2024-04-07T00:00:00").getTime(), 110],
[new Date("2024-04-08T00:00:00").getTime(), 115],
[new Date("2024-04-09T00:00:00").getTime(), 120]
]
];

  
    var options = {
      series: [{
      name: 'Current',
      data: dataSet[0]
    }, {
      name: 'Voltage',
      data: dataSet[1]
    }, {
      name: 'Vibration',
      data: dataSet[2]
    }],
      chart: {
      type: 'area',
      stacked: false,
      height: 350,
      width : 350,
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    yaxis: {
      labels: {
          style: {
              colors: '#8e8da4',
          },
          offsetX: 0,
          
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false
      }
    },

    //Month Based
/*        xaxis: {
      type: 'datetime',
      tickAmount: 8,
      min: new Date("01/01/2024").getTime(),
      max: new Date("01/01/2024").getTime(),
      labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function(val, timestamp) {
            return moment(new Date(timestamp)).format("DD MMM YYYY")
        }
      }
    },*/

//Hour based --for one day
xaxis: {
type: 'datetime',
tickAmount: 24, // Show ticks for each hour
min: new Date("2024-01-01T00:00:00").getTime(), // Set min to the beginning of the day
max: new Date("2024-01-02T00:00:00").getTime(), // Set max to the end of the day
labels: {
  rotate: -15,
  rotateAlways: true,
  formatter: function(val, timestamp) {
    return moment(new Date(timestamp)).format("DD MMM YYYY HH:mm"); // Format with hours and minutes
  }
}
},

    title: {
      text: 'Station:NewDelhi--Sensor1--SEN101',
      align: 'left',
      offsetX: 14
    },
    tooltip: {
      shared: true
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: -10
    }
    };

    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
  

  
// Method to draw the chart

/*function drawMultiSeriesAreaChart(dataSet, targetElementId, chartTitle, xAxisBasis) {
var currentDate = new Date();
var minDate;
var xAxisOptions = {};

if (xAxisBasis === 'day') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 1);
} else if (xAxisBasis === 'week') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 7);
} else if (xAxisBasis === 'month') {
minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
} else {
console.error('Invalid xAxisBasis provided. Please use "day", "week", or "month".');
return;
}

xAxisOptions = {
type: 'datetime',
tickAmount: xAxisBasis === 'day' ? 24 : (xAxisBasis === 'week' ? 7 : 8),
min: minDate.getTime(),
max: currentDate.getTime(),
labels: {
  rotate: -15,
  rotateAlways: true,
  formatter: function(val, timestamp) {
    return moment(new Date(timestamp)).format("DD MMM YYYY" + (xAxisBasis === 'day' ? " HH:mm" : ""));
  }
}
};

var options = {
series: [
  { name: 'Current', data: dataSet[0] },
  { name: 'Voltage', data: dataSet[1] },
  { name: 'Vibration', data: dataSet[2] }
],
chart: {
  type: 'area',
  stacked: false,
  height: 350,
  width: 350,
  zoom: { enabled: false },
},
dataLabels: { enabled: false },
markers: { size: 0 },
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.45,
    opacityTo: 0.05,
    stops: [20, 100, 100, 100]
  },
},
yaxis: {
  labels: {
    style: { colors: '#8e8da4' },
    offsetX: 0,
  },
  axisBorder: { show: false },
  axisTicks: { show: false }
},
xaxis: xAxisOptions,
title: { text: chartTitle, align: 'left', offsetX: 14 },
tooltip: { shared: true },
legend: { position: 'top', horizontalAlign: 'right', offsetX: -10 }
};

var chart = new ApexCharts(document.querySelector(`#${targetElementId}`), options);
chart.render();
}*/

/*
function drawMultiSeriesAreaChart(dataSet, targetElementId, chartTitle, xAxisBasis) {
var currentDate = new Date();
var minDate;
var xAxisOptions = {};

if (xAxisBasis === 'day') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 1);
} else if (xAxisBasis === 'week') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 7);
} else if (xAxisBasis === 'month') {
minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
} else {
console.error('Invalid xAxisBasis provided. Please use "day", "week", or "month".');
return;
}

xAxisOptions = {
type: 'datetime',
tickAmount: xAxisBasis === 'day' ? 24 : (xAxisBasis === 'week' ? 7 : 8),
min: minDate.getTime(),
max: currentDate.getTime(),
labels: {
  rotate: -15,
  rotateAlways: true,
  formatter: function(val, timestamp) {
    return moment(new Date(timestamp)).format("DD MMM YYYY" + (xAxisBasis === 'day' ? " HH:mm" : ""));
  }
}
};

var series = [];
for (var i = 0; i < dataSet.length; i++) {
series.push({ name: 'PRODUCT ' + String.fromCharCode(65 + i), data: dataSet[i] });
}

var options = {
series: series,
chart: {
  type: 'area',
  stacked: false,
  height: 350,
  width: 350,
  zoom: { enabled: false },
},
dataLabels: { enabled: false },
markers: { size: 0 },
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.45,
    opacityTo: 0.05,
    stops: [20, 100, 100, 100]
  },
},
yaxis: {
  labels: {
    style: { colors: '#8e8da4' },
    offsetX: 0,
  },
  axisBorder: { show: false },
  axisTicks: { show: false }
},
xaxis: xAxisOptions,
title: { text: chartTitle, align: 'left', offsetX: 14 },
tooltip: { shared: true },
legend: { position: 'top', horizontalAlign: 'right', offsetX: -10 }
};

var chart = new ApexCharts(document.querySelector(`#${targetElementId}`), options);
chart.render();
}*/


function drawMultiSeriesAreaChart(dataSet, targetElementId, chartTitle, xAxisBasis) {
// Verify dataSet
if (!Array.isArray(dataSet) || dataSet.length === 0) {
console.error('Invalid dataSet. Please provide a non-empty array of data.');
return;
}

// Verify targetElementId
if (typeof targetElementId !== 'string' || targetElementId.trim() === '') {
console.error('Invalid targetElementId. Please provide a valid string identifier for the target element.');
return;
}

// Verify xAxisBasis
if (['day', 'week', 'month'].indexOf(xAxisBasis) === -1) {
console.error('Invalid xAxisBasis provided. Please use "day", "week", or "month".');
return;
}

// Debugging: Log input parameters
console.log('Data Set:', dataSet);
console.log('Target Element ID:', targetElementId);
console.log('Chart Title:', chartTitle);
console.log('X Axis Basis:', xAxisBasis);


// Generate xAxisOptions
var currentDate = new Date();
var minDate;

if (xAxisBasis === 'day') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 1);
} else if (xAxisBasis === 'week') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 7);
} else if (xAxisBasis === 'month') {
minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
}

var xAxisOptions = {
type: 'datetime',
tickAmount: xAxisBasis === 'day' ? 24 : (xAxisBasis === 'week' ? 7 : 8),
min: minDate.getTime(),
max: currentDate.getTime(),
labels: {
  rotate: -15,
  rotateAlways: true,
  formatter: function(val, timestamp) {
    return moment(new Date(timestamp)).format("DD MMM YYYY" + (xAxisBasis === 'day' ? " HH:mm" : ""));
  }
}
};

// Debugging: Log xAxisOptions
console.log('X Axis Options:', xAxisOptions);

// Generate series
var series = [];
for (var i = 0; i < dataSet.length; i++) {
series.push({ name: 'PRODUCT ' + String.fromCharCode(65 + i), data: dataSet[i] });
}

// Debugging: Log generated series
console.log('Generated Series:', series);

// Create chart options
var options = {
series: series,
chart: {
  type: 'area',
  stacked: false,
  height: 250,
  width: 250,
  zoom: { enabled: false },
  //menu: { show: false },
  toolbar: { // Add toolbar configuration here
     show: false // Set show to false to disable toolbar
   }
},

dataLabels: { enabled: false },
markers: { size: 0 },
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.45,
    opacityTo: 0.05,
    stops: [20, 100, 100, 100]
  },
},
yaxis: {
  labels: { style: { colors: '#8e8da4' }, offsetX: 0 },
  axisBorder: { show: false },
  axisTicks: { show: false }
},
xaxis: xAxisOptions,
title: { text: chartTitle, align: 'left', offsetX: 14 },
tooltip: { shared: false },
legend: { position: 'top', horizontalAlign: 'right', offsetX: -10 }
};

// Debugging: Log chart options
console.log('Chart Options:', options);
// Render chart
var chart = new ApexCharts(document.querySelector(`#${targetElementId}`), options);
chart.render();
}













function drawMaximizedChart(dataSet, targetElementId, chartTitle, xAxisBasis) {
// Verify dataSet
if (!Array.isArray(dataSet) || dataSet.length === 0) {
console.error('Invalid dataSet. Please provide a non-empty array of data.');
return;
}

// Verify targetElementId
if (typeof targetElementId !== 'string' || targetElementId.trim() === '') {
console.error('Invalid targetElementId. Please provide a valid string identifier for the target element.');
return;
}

// Verify xAxisBasis
if (['day', 'week', 'month'].indexOf(xAxisBasis) === -1) {
console.error('Invalid xAxisBasis provided. Please use "day", "week", or "month".');
return;
}

// Debugging: Log input parameters
console.log('Data Set:', dataSet);
console.log('Target Element ID:', targetElementId);
console.log('Chart Title:', chartTitle);
console.log('X Axis Basis:', xAxisBasis);


// Generate xAxisOptions
var currentDate = new Date();
var minDate;

if (xAxisBasis === 'day') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 1);
} else if (xAxisBasis === 'week') {
minDate = new Date(currentDate);
minDate.setDate(currentDate.getDate() - 7);
} else if (xAxisBasis === 'month') {
minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
}

var xAxisOptions = {
type: 'datetime',
tickAmount: xAxisBasis === 'day' ? 24 : (xAxisBasis === 'week' ? 7 : 8),
min: minDate.getTime(),
max: currentDate.getTime(),
labels: {
  rotate: -15,
  rotateAlways: true,
  formatter: function(val, timestamp) {
    return moment(new Date(timestamp)).format("DD MMM YYYY" + (xAxisBasis === 'day' ? " HH:mm" : ""));
  }
}
};

// Debugging: Log xAxisOptions
console.log('X Axis Options:', xAxisOptions);

// Generate series
var series = [];
for (var i = 0; i < dataSet.length; i++) {
series.push({ name: 'PRODUCT ' + String.fromCharCode(65 + i), data: dataSet[i] });
}

// Debugging: Log generated series
console.log('Generated Series:', series);

// Create chart options
var options = {
series: series,
chart: {
  type: 'area',
  stacked: false,
  height: 750,
  width: 750,
  zoom: { enabled: true },
  //menu: { show: false },
  toolbar: { // Add toolbar configuration here
     show: true // Set show to false to disable toolbar
   }
},

dataLabels: { enabled: true },
markers: { size: 0 },
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.45,
    opacityTo: 0.05,
    stops: [20, 100, 100, 100]
  },
},
yaxis: {
  labels: { style: { colors: '#8e8da4' }, offsetX: 0 },
  axisBorder: { show: false },
  axisTicks: { show: false }
},
xaxis: xAxisOptions,
title: { text: chartTitle, align: 'left', offsetX: 14 },
tooltip: { shared: false },
legend: { position: 'top', horizontalAlign: 'right', offsetX: -10 }
};

// Debugging: Log chart options
console.log('Chart Options:', options);
// Render chart
var chart = new ApexCharts(document.querySelector(`#${targetElementId}`), options);
chart.render();
}

//working simple method
/*
function drawMultiSeriesAreaChart(dataSet, targetElementId, chartTitle) {
var options = {
series: [
  { name: 'Current', data: dataSet[0] },
  { name: 'Voltage', data: dataSet[1] },
  { name: 'Vibration', data: dataSet[2] }
],
chart: {
  type: 'area',
  stacked: false,
  height: 350,
  width: 350,
  zoom: { enabled: false },
},
dataLabels: { enabled: false },
markers: { size: 0 },
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.45,
    opacityTo: 0.05,
    stops: [20, 100, 100, 100]
  },
},
yaxis: {
  labels: {
    style: { colors: '#8e8da4' },
    offsetX: 0,
  },
  axisBorder: { show: false },
  axisTicks: { show: false }
},
xaxis: {
  type: 'datetime',
  tickAmount: 24,
  min: new Date("2024-01-01T00:00:00").getTime(),
  max: new Date("2024-01-02T00:00:00").getTime(),
  labels: {
    rotate: -15,
    rotateAlways: true,
    formatter: function(val, timestamp) {
      return moment(new Date(timestamp)).format("DD MMM YYYY HH:mm");
    }
  }
},
title: { text: chartTitle, align: 'left', offsetX: 14 },
tooltip: { shared: true },
legend: { position: 'top', horizontalAlign: 'right', offsetX: -10 }
};

var chart = new ApexCharts(document.querySelector(`#${targetElementId}`), options);
chart.render();
}*/

drawMultiSeriesAreaChart(dataSet,'chart2', 'MethodChart','day');
