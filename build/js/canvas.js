var app={chartJs:function(){var o=function(){return Math.round(100*Math.random())},r={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Network Usage",fillColor:"rgba(26,188,156,0.5)",strokeColor:"rgba(26,188,156,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[o(),o(),o(),o(),o(),o(),o()]},{label:"CPU Load",fillColor:"rgba(31,123,182,0.5)",strokeColor:"rgba(31,123,182,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[o(),o(),o(),o(),o(),o(),o()]}]};(o=function(){return Math.round(100*Math.random())})(),o(),o(),o(),o(),o(),o(),o(),o(),o(),o(),o(),o(),o();window.onload=function(){var o=document.getElementById("canvas").getContext("2d");window.myLine=new Chart(o).Line(r,{responsive:!0})}}};$(window).resize(function(){app.chartJs()}),app.chartJs();