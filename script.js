$(document).ready(function(){
     colors:['#058DC7', '#504B32'];
     
     $('#singleChartView').hide();
     
     var chartName = ['Total Gender Distribution','Animation','Story/art','Camera','Casting','Editorial','Production Management','Sound','Directors and Producers','Visual Effects','Screenplay','Other','Average'];
     var chartList = ["#container1","#container2","#container3","#container4","#container5","#container6","#container7","#container8","#container9","#container10","#container11","#container12","#container13"];
     var tableList = ["table1","table2","table3","table4","table5","table6","table7","table8","table9","table10", "table11","table12","table13",];
    
     var gridClicked = false;
     var bars = true;
     var Type = 'area';
     var Color;
     var Transparent = '#d8d8d8';
     $('#barCharts').click(function(){
          if(bars) {
               bars = false;
               Type = 'column';
               $('#barCharts').html("Polar Charts");
          } else {
               bars = true;
               Type = 'area';
               $('#barCharts').html("Bar Charts");
                
          }
          $('#barCharts').attr('disabled','disabled');

          drawCharts(bars);
          $('#barCharts').removeAttr('disabled');
     });

     $('#grid').click(function(){
          gridClicked = true;
          console.log(gridClicked);
          $('.section-heading').hide();
          $('#braveToolTip').hide();
          $('.bg-primary').css("background-color", "#000000");
          for ( var i=1; i<13; i++) {
               $("#container" + i).show();
          }
          $("#container1").hide();
          $('#grid').hide();
          $('#singleChartView').hide();
          $('#Main').show();
     });
     $('#Main').click(function(){
          gridClicked = false;
          $('.section-heading').show();
          $('#braveToolTip').show();
          $('.bg-primary').css("background-color", "#000000");
          for (var i = 1; i < 13; i++) {
               $("#container" + i).hide();
          }
          $("#container1").show();
          $('#grid').show();
          $('#Main').hide();
     });

     var drawCharts= function(showPolar){
        
     for(var i=0; i<chartList.length; i++){
          console.log(i);
          var graph = chartList[i];
          var percent = ' ';
          var Title = chartName[i];
          var Bars = showPolar;
          var mainChartColor = ['#00cc00', '#ffc0cb'];
          
          if (i == 0) {
               mainChartColor = ['#85a6a6', '#e0fff4'];
          }
          else {
               mainChartColor = ['#ff9966', '#b24700'];
          }
          
          if (bars == true) {
               if ( i == 0 | i == 12) {
                    percent = '%';
                    Type = 'column';
               }
               else {
                    percent = ' ';
                    Type = 'area';
               };
          };
          
          
          /*if (gridClicked == true) {
               Transparent = 'transparent';
               Color = '#000000';
               
          }
          else if (gridClicked == false) {
               Transparent = '#D8D8D8';
               Color = '#FFFFFF';
          };*/

          $(graph).highcharts({
               exporting: {
                    enabled: false
               },
               data: {
                    table: tableList[i],
                    startRow: 1,
                    endRow: 17,
                    endColumn: 7
               },
               colors: mainChartColor,
               chart: {
                    polar: Bars,
                    type: Type,
                    backgroundColor: '#000000'
                },
        
                title: {
                    text: Title,
                    style: {
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }
                },
        
                subtitle: {
                    text: 'Source: imdb'
                },
        
                pane: {
                    size: '65%'
                },
        
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 100,
                    layout: 'vertical'
                },
        
                xAxis: {
                    lineColor: Transparent,
                    gridLineColor: Transparent,
                    minorGridLineColor: Transparent,
                    tickmarkPlacement: 'on'
                },
        
                yAxis: {
                    lineColor: Transparent,
                    gridLineColor: Transparent,
                    minorGridLineColor: Transparent,
                    min: 0,
                    max: null,
                    endOnTick: false,
                    showLastLabel: true,
                    title: {
                        text: 'Number'
                    },
                    labels: {
                    formatter: function () {
                        return this.value + percent;
                    }
                    },
                    reversedStacks: true,
                },
        
                tooltip: {
                valueSuffix: percent
                },
    
        
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        shadow: false,
                        groupPadding: 0,
                        pointPlacement: 'on'
                    }
                }
            });
               
               var pathNum = 0;
               $("#container13 path").each(function() {
                  $(this).attr('id','id'+pathNum);
                  pathNum++;
               });
               
               //for(var j = 2; j < 13; j++){
                    $("#id16").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container2").html());
                         }
                    });
                    $("#id17").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container3").html());
                         }
                    });
                    $("#id18").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container4").html());
                         }
                    });
                    $("#id19").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container5").html());
                         }
                    });
                    $("#id20").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container6").html());
                         }
                    });
                    $("#id21").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container7").html());
                         }
                    });
                    $("#id22").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container8").html());
                         }
                    });
                    $("#id23").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container9").html());
                         }
                    });
                    $("#id24").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container10").html());
                         }
                    });
                    $("#id25").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container11").html());
                         }
                    });
                    $("#id26").click(function(){
                         if (gridClicked == false){
                              $("#container13").hide();
                              $('#singleChartView').show();
                              $('#singleChartView').html($("#container12").html());
                         }
                    });
               //}
                    $("#singleChartView").click(function(){
                         $('#singleChartView').hide();
                         $("#container13").show();
                         $('#singleChartView').html("");
                    });   
                         
               //}
//               j += 1;
          };
     };
    
     drawCharts(true);
     $(function () {
     $('[data-toggle="tooltip"]').tooltip()
     });
     $('#example').tooltip(options);
});
