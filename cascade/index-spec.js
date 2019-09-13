var assert = require('assert');
var GenerateCascadeGraph = require('./index');

const chartObject = {
    chart: {
        renderTo: 'RP5XsLu0JEV',
        zoomType: 'xy',
        type: 'line',
    },
    title: {
        text: 'Cainamist New Chart Type',
        align: 'center',
        style: {
            fontWeight: '500',
            fontSize: '16px',
        },
    },
    subtitle: {
        text: 'MOH - Tanzania',
        align: 'center',
        style: {
            fontWeight: '500',
            fontSize: '12px',
        },
    },
    credits: {
        enabled: false,
    },
    colors: [
        '#A9BE3B',
        '#558CC0',
        '#D34957',
        '#FF9F3A',
        '#968F8F',
        '#B7409F',
        '#FFDA64',
        '#4FBDAE',
        '#B78040',
        '#676767',
        '#6A33CF',
        '#4A7833',
        '#434348',
        '#7CB5EC',
        '#F7A35C',
        '#F15C80',
    ],
    plotOptions: {
        special: {
            showInLegend: true,
            colorByPoint: false,
        },
    },
    tooltip: {
        enabled: true,
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false,
            },
        },
    },
    yAxis: [
        {
            title: {
                text: '',
                style: {
                    color: '#000000',
                    fontWeight: 'normal',
                    fontSize: '14px',
                },
            },
            labels: {
                style: {
                    color: '#000000',
                    fontWeight: 'normal',
                    fontSize: '14px',
                },
            },
            plotLines: [
                {
                    color: '#000000',
                    dashStyle: 'Solid',
                    width: 2,
                    zIndex: 1000,
                    label: {
                        text: '',
                    },
                },
                {
                    color: '#000000',
                    dashStyle: 'Solid',
                    zIndex: 1000,
                    width: 2,
                    label: {
                        text: '',
                    },
                },
            ],
        },
    ],
    xAxis: {
        categories: [
            {
                name: '2019',
            },
        ],
        labels: {
            rotation: 0,
            style: {
                color: '#000000',
                fontWeight: 'normal',
                fontSize: '12px',
                textOverflow: 'none',
            },
        },
    },
    series: [
        {
            name: 'CTC Total received care',
            id: 'xXrwhpYL4UD',
            index: 0,
            turboThreshold: 0,
            data: [
                {
                    id: '2019',
                    name: '2019',
                    dataLabels: {
                        enabled: true,
                    },
                    y: 1204178,
                },
            ],
            type: 'special',
        },
        {
            name: 'CTC Total Current on ART',
            id: 'itIVeB2QV3B',
            index: 1,
            turboThreshold: 0,
            data: [
                {
                    id: '2019',
                    name: '2019',
                    dataLabels: {
                        enabled: true,
                    },
                    y: 1175858,
                },
            ],
            type: 'special',
        },
        {
            name: 'VL tests < 1000 copies/mL',
            id: 'BHUTFEEteC8',
            index: 2,
            turboThreshold: 0,
            data: [
                {
                    id: '2019',
                    name: '2019',
                    dataLabels: {
                        enabled: true,
                    },
                    y: 113988,
                },
            ],
            type: 'special',
        },
        {
            name: 'Total number of VL tests >= 1000 copies/mL',
            id: 'PDwDjN4d17k',
            index: 3,
            turboThreshold: 0,
            data: [
                {
                    id: '2019',
                    name: '2019',
                    dataLabels: {
                        enabled: true,
                    },
                    y: 485,
                },
            ],
            type: 'special',
        },
    ],
};

const chartExtension = {
    name: '90-90-90 HIV Prevention, Engagement, and Care Cascade',
    id: 'RP5XsLu0JEV',
    useCustomCategories: true,
    useMultiAxis: false,
    specialChartType: {
        isSpecial: true,
        isGeneric: false,
        type: '90_90_90_cascade',
    },
    multiAxisLabels: [
        {
            label: '',
            axisDataFormat: '',
            opposite: false,
            yAxis: {
                max: null,
                min: null
            }
        },
    ],
    chartTypes: [
        {
            name: 'column',
        },
    ],
    categories: [
        {
            id: '',
            name: '',
        },
        {
            id: '',
            name: '',
        },
    ],
    extensions: [
        {
            id: 'xXrwhpYL4UD',
            type: 'column',
            name: 'Custom Title 1',
        },
        {
            id: 'itIVeB2QV3B',
            type: 'column',
            name: 'Custom Title 2',
        },
        {
            id: 'BHUTFEEteC8',
            type: 'column',
            name: 'Custom Title 3',
        },
        {
            id: 'PDwDjN4d17k',
            type: 'column',
            name: 'Custom Title 4',
        },
        {
            id: 'OaFrqRMDvgU',
            type: 'column',
            name: 'Custom Title 5',
        },
    ],
};

const initialValue = 1600000;
const startingChartObject = {
    "chart": {
        "renderTo": "RP5XsLu0JEV",
        "zoomType": "xy",
        "type": "column"
    },
    "title": {
        "text": "Cainamist New Chart Type",
        "align": "center",
        "style": {
            "fontWeight": "500",
            "fontSize": "16px"
        }
    },
    "subtitle": {
        "text": "MOH - Tanzania",
        "align": "center",
        "style": {
            "fontWeight": "500",
            "fontSize": "12px"
        }
    },
    "credits": {
        "enabled": false
    },
    "colors": [
        "#A9BE3B",
        "#558CC0",
        "#D34957",
        "#FF9F3A",
        "#968F8F",
        "#B7409F",
        "#FFDA64",
        "#4FBDAE",
        "#B78040",
        "#676767",
        "#6A33CF",
        "#4A7833",
        "#434348",
        "#7CB5EC",
        "#F7A35C",
        "#F15C80"
    ],
    "xAxis": {
        "categories": [
            "Custom Title 1",
            "Custom Title 2",
            "Custom Title 3",
            "Custom Title 4 <b>(2019)</b>",
            "Custom Title 5 <b>(2019)</b>"
        ]
    },
    "yAxis": {
        "title": {
            "text": ""
        },
        "stackLabels": {
            "style": {
                "color": "black"
            },
            "enabled": true,
            "verticalAlign": "top"
        },
        "max": null,
        "min": null
    },
    "legend": {
        "reversed": true,
        "enabled": false
    },
    "plotOptions": {
        "series": {
            "dataLabels": {
                "enabled": true,
                "inside": true
            },
            "stacking": "normal",
            "grouping": false,
            "shadow": false,
            "borderWidth": 0,
            "enableMouseTracking": false,
            "allowPointSelect": true,
            "verticalAlign": "top",
            "align": "center"
        }
    },
    "tooltip": {
        "buttons": {
            "contextButton": {
                "enabled": false
            }
        }
    },
    "exporting": {
        "buttons": {
            "contextButton": {
                "enabled": false
            }
        }
    },
    "series": [
        {
            "name": "Targets",
            "stack": 1,
            "zIndex": 1,
            "pointPadding": 0,
            "dashStyle": "dash",
            "borderColor": "#66ccff",
            "borderWidth": 2,
            "dataLabels": [
                {
                    "align": "center",
                    "format": "{point.percent}",
                    "verticalAlign": "top",
                    "style": {
                        "color": "black"
                    }
                }
            ],
            "data": [
                {
                    "y": 1600000,
                    "color": "#66ccff"
                },
                {
                    "y": 1440000,
                    "percent": "90%",
                    "color": "#ffffff"
                },
                {
                    "y": 1296000,
                    "percent": "90%",
                    "color": "#ffffff"
                },
                {
                    "y": 113988,
                    "color": "#66ccff"
                },
                {
                    "y": 485,
                    "percent": "0.43%",
                    "color": "#66ccff"
                }
            ]
        },
        {
            "name": "Achieved",
            "stack": 2,
            "zIndex": 2,
            "pointPadding": 0,
            "dataLabels": [
                {
                    "align": "center",
                    "format": "{point.percent}%",
                    "verticalAlign": "top",
                    "style": {
                        "color": "black"
                    }
                }
            ],
            "data": [
                {
                    "color": "#66ccff"
                },
                {
                    "y": 1204178,
                    "percent": 83.62,
                    "color": "#66ccff"
                },
                {
                    "y": 1175858,
                    "percent": 90.73,
                    "color": "#66ccff"
                },
                {
                    "percent": 100,
                    "color": "#66ccff"
                },
                {
                    "color": "#66ccff"
                }
            ]
        }
    ]
};

describe('GenerateCascadeGraph', function () {
    describe('Generate HIV Care and Treatment Cascade Graph(90-90-90 Cascade Graph)', function () {
        it("Should return the valid highchart chart object to be drawn 'HIV Cascade Graph'", function () {
            const result = GenerateCascadeGraph.GenerateCascadeGraph(
                false,
                true,
                'nacp',
                'dhis2',
                'column',
                chartObject,
                chartExtension,
                initialValue
            );
            const initialChartObject = JSON.stringify(startingChartObject);
            const finalChartObject = JSON.stringify(result);
            assert.equal(initialChartObject, finalChartObject);
        });
    });
});
