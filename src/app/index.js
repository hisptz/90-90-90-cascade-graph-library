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
            formatter: function () {
                return this.total;
            },
        },
    };
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
