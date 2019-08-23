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
 */
const getChartTypeConfiguration = function (ctype) {
    return ctype == undefined
        ? {
            type: ctype,
        }
        : {
            type: 'column',
        };
};

/**
 *
 * @param {boolean} useCustomSeriesTitle
 * @param {object} chartObject
 * @param {object} favoriteExtension
 */
const getChartTitleConfiguration = function (
    useCustomSeriesTitle,
    chartObject,
    favoriteExtension
) {
    return !useCustomSeriesTitle
        ? {
            text: favoriteExtension.name,
        }
        : {
            text: chartObject.title.text,
        };
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
                    }
                });
            }
        });
        return xAxisLabels;
    }
};

/**
 * 
 * @param {object} chartObject 
 */
const getDefaultXAxisLabels = function (chartObject) {
    return chartObject ? _.map(chartObject.series, item => item.name) : [];
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

exports.GenerateCascadeGraph = GenerateCascadeGraph;
