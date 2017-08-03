var app = function() {
  //Chart.js LineChart, BarChart, DoughnutChart
  var chartJs = function() {
    //Line Charts
    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100)
    };
    var lineChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: 'Network Usage',
        fillColor: 'rgba(26,188,156,0.5)',
        strokeColor: 'rgba(26,188,156,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }, {
        label: 'CPU Load',
        fillColor: 'rgba(31,123,182,0.5)',
        strokeColor: 'rgba(31,123,182,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }]

    }
    //Bar Charts
    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100)
    };
    var barChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        fillColor: 'rgba(26,188,156,0.5)',
        strokeColor: 'rgba(255,255,255,0.8)',
        highlightFill: 'rgba(26,188,156,1)',
        highlightStroke: 'rgba(255,255,255,0.8)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }, {
        label: 'CPU Load',
        fillColor: 'rgba(31,123,182,0.5)',
        strokeColor: 'rgba(255,255,255,0.8)',
        highlightFill: 'rgba(31,123,182,1)',
        highlightStroke: 'rgba(255,255,255,0.8)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }]

    }

    //DoughnutChart
    var doughnutData = [{
        value: 300,
        color: "#1ABC9C",
        highlight: "#1ABC9C",
        label: "Chrome"
      }, {
        value: 50,
        color: "#556B8D",
        highlight: "#556B8D",
        label: "IE"
      }, {
        value: 100,
        color: "#EDCE8C",
        highlight: "#EDCE8C",
        label: "Safari"
      }, {
        value: 40,
        color: "#CED1D3",
        highlight: "#1F7BB6",
        label: "Other"
      }, {
        value: 120,
        color: "#1F7BB6",
        highlight: "#1F7BB6",
        label: "Firefox"
      }

    ];

    window.onload = function() {
      var ctx1 = document.getElementById("canvas").getContext("2d");
      window.myLine = new Chart(ctx1).Line(lineChartData, {
        responsive: true
      });



    };

  };
  //return functions
  return {
    chartJs: chartJs,
  };
}();
$(window).resize(function() {
  app.chartJs();

});

app.chartJs();
