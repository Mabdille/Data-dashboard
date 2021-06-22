// Chart Options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },
    
    series: [{
        name: 'Population',
        data: [	8907918, 1153717, 612040, 579256, 571922, 554400, 544402, 503388, 488050, 470965]
    }],
    xaxis: {
        categories: ['London', 'Birmingham', 'Glasgow', 'Liverpool', 'Bristol', 'Manchester', 'Sheffield', 'Leeds', 'Edinburgh', 'Leicester']
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
},
fill: {
  colors: ['#f44336']
},
dataLabels: {
enabled: false
  },
  title: {
    text: 'Largest UK Cities By population',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
}
},



// Init Chart
 chart = new ApexCharts(document.querySelector('#chart'), options)

// Render Chart
chart.render()


// Event example
document.getElementById("change").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);
