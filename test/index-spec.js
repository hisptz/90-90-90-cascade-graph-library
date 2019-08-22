var assert = require('assert');
var _90_90_90_CascadeGraph = require('../src/app/index');

describe('_90_90_90_CascadeGraph', function () {
    describe('add _90_90_90_CascadeGraph', function () {
        it('return _90_90_90_CascadeChartObject', function () {
            var result = _90_90_90_CascadeGraph._90_90_90_CascadeGraph(
                'nacp',
                'dhis2',
                'column'
            );
            assert.equal(result, 'generated_chart_object');
        });
    });
});