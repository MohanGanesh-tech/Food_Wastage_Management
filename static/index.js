
document.addEventListener("DOMContentLoaded", function(event) { 
    
    Highcharts.chart('grafico1', {
    
credits: {
        enabled: false
    },
        title: {
            text: 'Revenue by brand'
        },
    
    
        yAxis: {
            title: {
                text: ' $'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                pointStart: 1
            }
        },
    
        series: [{
            name: 'Brand 1',
            data: [23, 27, 32, 100, 25, 27, 22, 19]
        }, {
            name: 'Brand 2',
            data: [45, 49, 43, 41, 42, 41, 38, 34]
        }, {
            name: 'Brand 3',
            data: [43, 58, 51, 52, 51, 60, 62, 65]
        }, {
            name: 'Brand 4',
            data: [null, null, 23, 15, 19, 21, 27, 30]
        }]
    
    });
       
       
       
       
       
       
       
       
    
    Highcharts.chart('grafico2', {
    chart: {
        type: 'areaspline'
    },

credits: {
        enabled: false
    },    
        title: {
            text: 'Forecast - ROI'
        },
    
    
        yAxis: {
            title: {
                text: 'Months'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                pointStart: 1
            }
        },
    
        series: [{
            name: 'Product 1',
            data: [15, 27, 32, 26, 25, 20]
        }, {
            name: 'Product 2',
            data: [43, 41, 42, 41, 38, 34]
        }, {
            name: 'Product 3',
            data: [51, 52, 51, 60, 62, 65]
        }, {
            name: 'Product 4',
            data: [null, null, 29, 22, 19, 21]
        }]
    
    });    
    
    
    
    
    Highcharts.chart('grafico3', {
    chart: {
        type: 'column'
    },
    
credits: {
        enabled: false
    },
    title: {
        text: 'Runway overview'
    },
    xAxis: {
        categories: ['Product 1', 'Product 2', 'Product 3', 'Product 4']
    },
    yAxis: {
        title: {
            text: 'value (USD)'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Debit',
        data: [0,0,0,15],
        color : '#FA5858'
        
    }, {
        name: 'Available',
        data: [150, 130, 25,  0],
        color : '#58FA58'
    }, {
        name: 'Used',
        data: [100, 140, 100, 205],
        color : '#FE9A2E'
        
    }]
});
    
    
    
   Highcharts.chart('grafico4', {

credits: {
        enabled: false
    },
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: true
    },

    title: {
        text: 'Business analisys'
    },


    xAxis: {
    min: 0, max: 100,
        gridLineWidth: 1,
        title: {
            text: 'Revenue'
        },
        labels: {
            format: '{value} %'
        },
        plotLines: [{
            color: 'red',
            dashStyle: 'dot',
            width: 1,
            value: 25,
            zIndex: 3
        },{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 50,
            zIndex: 3
        },{
            color: 'green',
            dashStyle: 'dot',
            width: 1,
            value: 75,
            zIndex: 3
        }
        ]
    },

    yAxis: {
    	 min: 0, max: 100,
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Sales'
        },
        labels: {
            format: '{value} %'
        },
        maxPadding: 0.2,
        plotLines: [{
            color: 'red',
            dashStyle: 'dot',
            width: 1,
            value: 25,
            zIndex: 3
        },{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 50,
            zIndex: 3
        },{
            color: 'green',
            dashStyle: 'dot',
            width: 1,
            value: 75,
            zIndex: 3
        }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th>CAC:</th><td>{point.x}%</td></tr>' +
            '<tr><th>Vendas:</th><td>{point.y}%</td></tr>' +
            '<tr><th>Volume:</th><td>R$ {point.z} k</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.code}'
            }
        }
    },

    series: [{
    	  name : 'Ok',
        minSize : '10%',
        maxSize: '20%',
        color : '#0c0',
        data: [
            { x: 80.4, y: 62.5, z: 50, code: 'I4', name: 'Product 4' }

        ]
    }, 
    {
    name : 'Danger',
        minSize : '10%',
        maxSize: '20%',
    color: '#c00',
    data : [
                { x: 25, y: 15, z: 16, code: 'I1', name: 'Product 1' }
    ]
    },
    
    {
    	name : 'Warning',
        minSize : '10%',
        maxSize: '20%',
      color : '#fa0',
      data : [
         { x: 25, y: 65, z: 32, code: 'I5', name: 'Product 5' }, 
         { x: 86.5, y: 10, z: 17, code: 'I2', name: 'Product 2'}
      ]
    },
    
    {
    name : 'Regular',
        minSize : '10%',
        maxSize: '20%',
     color : '#af0',
    data: [
    { x: 80.8, y: 48.5, z: 15, code: 'I3', name: 'Product 3' }
    ]
    }
    
    
    
    
    ]

}); 
    
    
    
});
