const _ = require('lodash');

/**
 *
 * @param {boolean} useCustomChartTitle
 * @param {boolean} useCustomXAxisTitle
 * @param {string} config
 * @param {string} context
 * @param {string} ctype
 * @param {object} chartObject
 * @param {object} chartExtension
 * @param {number} initialTarget
 */

/**
 * No arguements
 */
const getLegendConfigurations = () => {
    return {
        reversed: true,
        enabled: false,
    };
};

/**
 *
 * @param {number} pos
 */
const getColorOptionForTargetedValue = (pos,chartExtension) => {
    if (pos >= 1 && pos <= 2) {
        return '#ffffff';
    } else {
        return _.has(chartExtension, 'specialChartType') &&
            chartExtension.specialChartType.color !== ''
            ? chartExtension.specialChartType.color
            : '#66ccff';
    }
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getIndicatorPerformanceDataValues = (initialTarget, chartObject) => {
    return chartObject && _.has(chartObject, 'series') && initialTarget
        ? [initialTarget].concat(
            _.map(chartObject.series, item => parseFloat(item.data[0].y))
        )
        : [];
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const findSummation = (initialTarget, chartObject) => {
    const indicatorArray = getIndicatorPerformanceDataValues(
        initialTarget,
        chartObject
    );
    const indicatorData = [
        indicatorArray[indicatorArray.length - 1],
        indicatorArray[indicatorArray.length - 2],
    ];
    return indicatorData ? indicatorData.reduce((a, b) => a + b, 0) : 0;
};

/**
 *
 * @param {number} pos
 * @param {number} initialTarget
 * @param {array} sanitizedSeriesData
 */
const getTargetsValueBasedOnPercentages = (
    pos,
    initialTarget,
    sanitizedSeriesData
) => {
    if (pos === 0) {
        return initialTarget;
    } else if (pos === 1) {
        return parseFloat(calculate90Percent(initialTarget).toFixed(2));
    } else if (pos === 2) {
        return parseFloat(
            calculate90Percent(calculate90Percent(initialTarget)).toFixed(2)
        );
    } else if (pos >= 3 && pos <= 4) {
        return parseFloat(sanitizedSeriesData[pos].toFixed(2));
    }
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getTotalIndicatorValue = (initialTarget, chartObject) => {
    return initialTarget && chartObject
        ? findSummation(initialTarget, chartObject)
        : 0;
};

/**
 *
 */

const getTooltipCOnfiguration = () => {
    return {
        enabled: true,
    };
};

/**
 *
 * @param {number} pos
 * @param {number} initialTarget
 * @param {array} sanitizedSeriesData
 */
const getAchievedIndicatorsAgainstTargets = (pos, sanitizedSeriesData) => {
    if (pos >= 1 && pos <= 2) {
        return sanitizedSeriesData ? sanitizedSeriesData[pos] : 0;
    }
};

const calculate90Percent = value => {
    if (value) {
        return value * (90 / 100);
    }
};

/**
 *
 * @param {number} data
 * @param {number} pos
 * @param {array} sanitizedSeriesData
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const calculatePercentForTargetedValues = (
    pos,
    sanitizedSeriesData,
    initialTarget
) => {
    if (pos === 1) {
        return parseFloat(
            (sanitizedSeriesData[pos] /
                calculate90Percent(initialTarget) *
                100).toFixed(2)
        );
    } else if (pos === 2) {
        return parseFloat(
            (sanitizedSeriesData[pos] /
                calculate90Percent(calculate90Percent(initialTarget)) *
                100).toFixed(2)
        );
    } else if (pos === 3) {
        return 100;
    }
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getLastColumnIndicatorPercentage = (initialTarget, chartObject) => {
    const indicatorArray = getIndicatorPerformanceDataValues(
        initialTarget,
        chartObject
    );
    return indicatorArray
        ? parseFloat(
            (indicatorArray[indicatorArray.length - 1] /
                indicatorArray[indicatorArray.length - 2] *
                100).toFixed(2)
        )
        : 0;
};

// // ToDo: START - Deprecated Implementation
// /**
//  *
//  * @param {number} initialTarget
//  * @param {object} chartObject
//  */
// const getLastColumnIndicatorPercentageDeprecated = (initialTarget, chartObject) => {
// 	const indicatorArray = getIndicatorPerformanceDataValues(
// 		initialTarget,
// 		chartObject
// 	);
// 	const total = getTotalIndicatorValue(initialTarget, chartObject);
// 	return indicatorArray && total
// 		? parseFloat(
// 				(
// 					(indicatorArray[indicatorArray.length - 2] / total) *
// 					100
// 				).toFixed(2)
// 		  )
// 		: 0;
// };
// // ToDo: END - Deprecated Implementation

/**
 *
 * @param {number} pos
 */
const getColorOptionForTargetValues = chartExtension => {
    return _.has(chartExtension, 'specialChartType') &&
        chartExtension.specialChartType.color !== ''
        ? chartExtension.specialChartType.color
        : '#66ccff';
};

/**
 *
 * @param {number} data
 * @param {number} pos
 * @param {array} sanitizedSeriesData
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const calculatePercentForTargetedValue = (pos, initialTarget, chartObject) => {
    if (pos === 0 && pos === 3) {
        return ``;
    } else if (pos >= 1 && pos <= 2) {
        return `90%`;
    } else if (pos === 4) {
        return (
            getLastColumnIndicatorPercentage(initialTarget, chartObject).toFixed(
                2
            ) + `%`
        );
    }
};

/**
 *
 * @param {string} ctype
 * @param {object} chartObject
 */
const getChartTypeConfiguration = (ctype, chartObject) => {
    return ctype !== undefined
        ? { ...chartObject.chart, type: ctype }
        : { ...chartObject.chart, type: 'column' };
};

/**
 *
 * @param {boolean} useCustomChartTitle
 * @param {object} chartObject
 * @param {object} favoriteExtension
 */
const getChartTitleConfiguration = (
    useCustomChartTitle,
    chartObject,
    favoriteExtension
) => {
    return useCustomChartTitle
        ? { ...chartObject.title, text: favoriteExtension.name }
        : { ...chartObject.title, text: chartObject.title.text };
};

/**
 *
 * @param {Array} axisLabels
 * @param {Object} chartObject
 */
const getPeriodAppendedOnChartCategories = (axisLabels, chartObject) => {
    if (axisLabels) {
        return _.map(axisLabels, (axisLabel, index) => {
            return index === 3 || index === 4
                ? axisLabel + ' <b>(' + chartObject.xAxis.categories[0].name + ')</b>'
                : axisLabel;
        });
    }
};

// START: Modified Cascade Series
/**
 *
 * @param {*} chartObject
 * @param {*} favoriteExtensions
 */
const getXAxisCustomCategories = (chartObject, favoriteExtensions) => {
    if (chartObject) {
        if (_.has(chartObject, 'series')) {
            const sanitizedCategories = getCascadeCategories(
                getUniqueCategories(
                    _.uniq(
                        _.map(chartObject.series, series => {
                            return _.has(favoriteExtensions, 'extensions')
                                ? _.map(favoriteExtensions.extensions, extension => {
                                    return series.id === extension.id
                                        ? {
                                            name: extension.name,
                                            position: extension.position,
                                        }
                                        : {
                                            name: extension.name,
                                            position: extension.position,
                                        };
                                })
                                : [];
                        })
                    ),
                    'name'
                )
            );
            return getPeriodAppendedOnChartCategories(
                sanitizedCategories,
                chartObject
            );
        } else {
            console.log('Chart has no series');
        }
    } else {
        console.log('No Chart Object found');
    }
};

/**
 *
 * @param {*} uniqueCategories
 */
const getCascadeCategories = uniqueCategories => {
    return _.map(uniqueCategories, category => {
        return category.name;
    });
};

/**
 *
 * @param {*} categories
 * @param {*} criteria
 */
const getUniqueCategories = (categories, criteria) => {
    const uniqueCategories = _.uniqBy(_.flattenDeep(categories), criteria);
    return getSortedCategoriesBasedOnFavoriteExtensionPosition(
        uniqueCategories,
        'position'
    );
};

/**
 *
 * @param {*} uniqueCategories
 * @param {*} criteria
 */
const getSortedCategoriesBasedOnFavoriteExtensionPosition = (
    uniqueCategories,
    criteria
) => {
    return _.sortBy(uniqueCategories, criteria);
};
// END: Modified Cascade Series

/**
 *
 * @param {*} chartObject
 */
const getFavoritteXAxisLabels = chartObject => {
    return chartObject && _.has(chartObject, 'series')
        ? _.map(chartObject.series, series => series.name)
        : [];
};

/**
 *
 * @param {boolean} useCustomXAxisTitle
 * @param {object} chartObject
 * @param {object} favoriteExtensions
 */
const getXAxisChartConfigurations = (
    useCustomXAxisTitle,
    chartObject,
    favoriteExtensions
) => {
    return useCustomXAxisTitle
        ? getXAxisCustomCategories(chartObject, favoriteExtensions)
        : getFavoritteXAxisLabels(chartObject);
};

const getYAxisChartConfigurations = chartExtension => {
    return {
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
        max: _.has(chartExtension, 'multiAxisLabels')
            ? chartExtension.multiAxisLabels[0].yAxis.max
            : '',
        min: _.has(chartExtension, 'multiAxisLabels')
            ? chartExtension.multiAxisLabels[0].yAxis.min
            : '',
    };
};

const getPlotOptionsConfigurations = () => {
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
const getSanitizedSeriesTargetValue = (initialTarget, chartObject) => {
    return getIndicatorPerformanceDataValues(initialTarget, chartObject);
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getTargetedSeriesData = (initialTarget, chartObject, chartExtension) => {
    const sanitizedSeriesData = getSanitizedSeriesTargetValue(
        initialTarget,
        chartObject
    );
    return _.map(sanitizedSeriesData, (data, pos) => {
        if (pos >= 1 && pos <= 2) {
            return {
                y: getAchievedIndicatorsAgainstTargets(pos, sanitizedSeriesData),
                percent: calculatePercentForTargetedValues(
                    pos,
                    sanitizedSeriesData,
                    initialTarget
                ),
                color: getColorOptionForTargetValues(chartExtension),
            };
        } else {
            return {
                percent: calculatePercentForTargetedValues(
                    pos,
                    sanitizedSeriesData,
                    initialTarget
                ),
                color: getColorOptionForTargetValues(chartExtension),
            };
        }
    });
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getArchievedSeriesValue = (
    initialTarget,
    chartObject,
    chartExtension
) => {
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
                style: {
                    color: 'black',
                },
            },
        ],
        data: getTargetedSeriesData(initialTarget, chartObject, chartExtension),
    };
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getInitializedSeriesData = (
    initialTarget,
    chartObject,
    chartExtension
) => {
    const sanitizedSeriesData = getSanitizedSeriesTargetValue(
        initialTarget,
        chartObject
    );
    return _.map(sanitizedSeriesData, (data, pos) => {
        return {
            y: getTargetsValueBasedOnPercentages(
                pos,
                initialTarget,
                sanitizedSeriesData
            ),
            percent: calculatePercentForTargetedValue(
                pos,
                initialTarget,
                chartObject
            ),
            color: getColorOptionForTargetedValue(pos, chartExtension),
        };
    });
};

/**
 *
 * @param {number} initialTarget
 * @param {object} chartObject
 */
const getTargetedSeriedValue = (initialTarget, chartObject, chartExtension) => {
    return {
        name: 'Targets',
        stack: 1,
        zIndex: 1,
        pointPadding: 0,
        dashStyle: 'dash',
        borderColor: _.has(chartExtension, 'specialChartType') &&
            chartExtension.specialChartType.color !== ''
            ? chartExtension.specialChartType.color
            : '#66ccff',
        borderWidth: 2,
        dataLabels: [
            {
                align: 'center',
                format: '{point.percent}',
                verticalAlign: 'top',
                style: {
                    color: 'black',
                },
            },
        ],
        data: getInitializedSeriesData(initialTarget, chartObject, chartExtension),
    };
};

/**
 *
 * @param {boolean} initialTarget
 * @param {*} chartObject
 */
const getSeriesConfigurations = (
    initialTarget,
    chartObject,
    chartExtension
) => {
    return [
        getTargetedSeriedValue(initialTarget, chartObject, chartExtension),
        getArchievedSeriesValue(initialTarget, chartObject, chartExtension),
    ];
};

exports.GenerateCascadeGraph = (
    useCustomChartTitle,
    useCustomXAxisTitle,
    config,
    context,
    ctype,
    chartObject,
    chartExtension,
    initialTarget
) => {
    return {
        chart: getChartTypeConfiguration(ctype, chartObject),
        title: getChartTitleConfiguration(
            useCustomChartTitle,
            chartObject,
            chartExtension
        ),
        subtitle: chartObject.subtitle,
        credits: chartObject.credits,
        colors: chartObject.colors,
        xAxis: {
            categories: getXAxisChartConfigurations(
                useCustomXAxisTitle,
                chartObject,
                chartExtension
            ),
        },
        yAxis: getYAxisChartConfigurations(chartExtension),
        legend: getLegendConfigurations(),
        plotOptions: getPlotOptionsConfigurations(),
        tooltip: chartObject.exporting,
        exporting: chartObject.exporting,
        series: getSeriesConfigurations(
            initialTarget,
            chartObject,
            chartExtension
        ),
    };
};
