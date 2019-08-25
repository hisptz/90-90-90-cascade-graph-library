/**
 *
 * @param {boolean} useCustomSeriesTitle
 * @param {string} config
 * @param {string} context
 * @param {string} ctype
 * @param {object} chartObject
 * @param {object} favoriteExtension
 */
const GenerateCascadeGraph = function (
    useCustomSeriesTitle,
    config,
    context,
    ctype,
    chartObject,
    favoriteExtension
) {
    return 'generated_chart_object';
};

/**
 * 
 * @param {string} ctype 
 * @param {object} chartObject 
 */
const getChartTypeConfiguration = function (ctype, chartObject) {
    return ctype == undefined
        ? { ...chartObject.chart, type: ctype }
        : { ...chartObject.chart, type: 'column' };
};

/**
 * 
 * @param {boolean} useCustomChartTitle 
 * @param {object} chartObject 
 * @param {object} favoriteExtension 
 */
const getChartTitleConfiguration = function (
    useCustomChartTitle,
    chartObject,
    favoriteExtension
) {
    return useCustomChartTitle
        ? { ...chartObject.title, text: favoriteExtension.name }
        : { ...chartObject.title, text: chartObject.title.text };
};

/**
 * 
 * @param {object} chartObject 
 * @param {object} favoriteExtensions 
 */
const getCustomXAxisLabels = function (chartObject, favoriteExtensions) {
    const xAxisLabels = [];
    if (chartObject) {
        chartObject.series.forEach(item => {
            if (item) {
                favoriteExtensions.extensions.forEach(ext => {
                    if (ext.id == item.id) {
                        xAxisLabels.push(ext.name);
                    } else {
                        xAxisLabels.push(ext.name);
                    }
                });
            }
        });
        return _.uniq(xAxisLabels);
    }
};

/**
 * 
 * @param {object} chartObject 
 */
const getDefaultXAxisLabels = function (chartObject) {
    return chartOBJ ? _.map(chartOBJ.series, item => item.name) : [];
};

/**
 * 
 * @param {boolean} useCustomXAxisTitle 
 * @param {object} chartObject 
 * @param {object} favoriteExtensions 
 */
const getXAxisChartConfigurations = function (
    useCustomXAxisTitle,
    chartObject,
    favoriteExtensions
) {
    return useCustomXAxisTitle
        ? getCustomXAxisLabels(chartObject, favoriteExtensions)
        : getDefaultXAxisLabels(chartObject);
};

const getYAxisChartConfigurations = function () {
    return {
        min: 0,
        title: {
            text: '',
        },
        stackLabels: {
            style: {
                color: 'black',
            },
            enabled: true,
            verticalAlign: 'top',
        },
    };
};

const getPlotOptionsConfigurations = function () {
    return {
        series: {
            dataLabels: {
                enabled: true,
                inside: true,
            },
            stacking: 'normal',
            grouping: false,
            shadow: false,
            borderWidth: 0,
            enableMouseTracking: false,
            allowPointSelect: true,
            verticalAlign: 'top',
            align: 'center',
        },
    };
};

/**
 * 
 * @param {number} initialTarget 
 * @param {object} chartObject 
 */
const getTargetSeriesData = function (initialTarget, chartObject) {
    return {
        name: 'Achieved',
        stack: 2,
        zIndex: 2,
        pointPadding: 0,
        dataLabels: [
            {
                align: 'center',
                format: '{point.percent}%',
                verticalAlign: 'top',
                align: 'center',
                style: {
                    color: 'black',
                },
            },
        ],
        data: getTargetedSeriesData(initialTarget, chartObject),
    };
};

/**
 * 
 * @param {number} initialTarget 
 * @param {object} chartObject 
 */
const getInitialSeriesData = function (initialTarget, chartObject) {
    return {
        name: 'Targets',
        stack: 1,
        zIndex: 1,
        pointPadding: 0,
        dashStyle: 'dash',
        borderColor: '#66ccff',
        borderWidth: 1,
        dataLabels: [
            {
                align: 'center',
                format: '{point.percent}%',
                verticalAlign: 'top',
                align: 'center',
                style: {
                    color: 'black',
                },
            },
        ],
        data: getInitializedSeriesData(initialTarget, chartObject),
    };
};

/**
 * 
 * @param {number} initialTarget 
 * @param {object} chartObject 
 */
const getInitializedSeriesData = function (initialTarget, chartObject) {
    const sanitizedSeriesData = getSanitizedSeriesTargetValue(
        initialTarget,
        chartObject
    );
    return _.map(sanitizedSeriesData, (data, index) => {
        return {
            y: getInitialData(index, initialTarget, sanitizedSeriesData),
            percent: calculatePercentForInitialValues(
                data,
                index,
                sanitizedSeriesData,
                initialTarget,
                chartObject
            ),
            color: getColorOptionForInitialValues(index),
        };
    });
};

/**
 * 
 * @param {number} initialTarget 
 * @param {object} chartObject 
 */
const getTargetedSeriesData = function (initialTarget, chartObject) {
    const sanitizedSeriesData = getSanitizedSeriesTargetValue(
        initialTarget,
        chartObject
    );
    return _.map(sanitizedSeriesData, (data, index) => {
        if (index >= 1 && index <= 2) {
            return {
                y: getTargetData(index, initialTarget, sanitizedSeriesData),
                percent: calculatePercentForTargetedValues(
                    data,
                    index,
                    sanitizedSeriesData,
                    initialTarget,
                    chartObject
                ),
                color: getColorOptionForTargetValues(index),
            };
        } else {
            return {
                percent: calculatePercentForTargetedValues(
                    data,
                    index,
                    sanitizedSeriesData,
                    initialTarget,
                    chartObject
                ),
                color: getColorOptionForTargetValues(index),
            };
        }
    });
};

/**
 * 
 * @param {boolean} initialTarget 
 * @param {*} chartObject 
 */
const getSeriesConfigurations = function (initialTarget, chartObject) {
    return [
        getInitialSeriesData(initialTarget, chartObject),
        getTargetSeriesData(initialTarget, chartObject),
    ];
};


/**
 * 
 * @param {number} data 
 * @param {number} index 
 * @param {array} sanitizedSeriesData 
 * @param {number} initialTarget 
 * @param {object} chartObject 
 */
const calculatePercentForInitialValues = function (
    data,
    index,
    sanitizedSeriesData,
    initialTarget,
    chartObject
) {
    if (index == 0) {
        return parseFloat((data / data * 100).toFixed(2));
    } else if (index >= 1 && index <= 2) {
        return parseFloat(
            (data / sanitizedSeriesData[index - 1] * 100).toFixed(2)
        );
    } else if (index == 3) {
        return parseFloat(
            (sanitizedSeriesData[index] / sanitizedSeriesData[index] * 100).toFixed(
                2
            )
        );
    } else if (index == 4) {
        return getIndicatorPercentage(initialTarget, chartObject);
    }
};

/**
 * 
 * @param {number} data 
 * @param {number} index 
 * @param {array} sanitizedSeriesData 
 * @param {number} initialTarget 
 * @param {object} chartObject 
 */
const calculatePercentForTargetedValues = function (
    data,
    index,
    sanitizedSeriesData,
    initialTarget,
    chartObject
) {
    if (index == 1) {
        return parseFloat(
            (sanitizedSeriesData[index] /
                (initialTarget * (90 / 100)) *
                100).toFixed(2)
        );
    } else if (index == 2) {
        return parseFloat(
            (sanitizedSeriesData[index] /
                (initialTarget * (90 / 100)) *
                (90 / 100) *
                100).toFixed(2)
        );
    } else if (index == 3) {
        return 100;
    }
};

/**
 * 
 * @param {array} indicatorArray 
 */
const getAverageIndicatorValue = function (indicatorArray) {
    return indicatorArray ? findAverage(indicatorArray) : 0;
};

/**
 * 
 * @param {array} indicatorArray 
 */
const getTotalIndicatorValue = function (indicatorArray) {
    return indicatorArray ? findSummation(indicatorArray) : 0;
};

/**
 * 
 * @param {array} indicatorArray 
 */
const findSummation = function (indicatorArray) {
    return indicatorArray ? indicatorArray.reduce((a, b) => a + b, 0) : 0;
};

/**
 * 
 * @param {array} indicatorArray 
 */
const findAverage = function (indicatorArray) {
    return indicatorArray
        ? findSummation(indicatorArray) / indicatorArray.length
        : 0;
};

exports.GenerateCascadeGraph = GenerateCascadeGraph;
