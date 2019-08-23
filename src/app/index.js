/**
 *
 * @param {boolean} useCustomSeriesLabel
 * @param {string} config
 * @param {string} context
 * @param {string} ctype
 * @param {object} chartObject
 * @param {object} favoriteExtension
 */
const GenerateCascadeGraph = function (
    useCustomSeriesLabel,
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
 * @param {string || undefined} ctype 
 */
const getChartTypeConfiguration = function (ctype) {
    return ctype == undefined ? { type: ctype } : { type: 'column' };
};

const chartTitle = function () { };

exports.GenerateCascadeGraph = GenerateCascadeGraph;
