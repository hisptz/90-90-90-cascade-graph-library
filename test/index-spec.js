var assert = require('assert');
var GenerateCascadeGraph = require('../src/app/index');

describe('GenerateCascadeGraph', function () {
    describe('add GenerateCascadeGraph', function () {
        it('return _90_90_90_CascadeChartObject', function () {
            var result = GenerateCascadeGraph.GenerateCascadeGraph(
                'nacp',
                'dhis2',
                'column'
            );
            assert.equal(result, 'generated_chart_object');
        });
    });
});