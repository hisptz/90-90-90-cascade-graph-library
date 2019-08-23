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
    return ctype == undefined ? { type: ctype } : { type: 'column' };
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
        ? { text: favoriteExtension.name }
        : { text: chartObject.title.text };
};
exports.GenerateCascadeGraph = GenerateCascadeGraph;
