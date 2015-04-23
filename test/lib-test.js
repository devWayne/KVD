var assert = require("assert")

var parseTag = require('../lib/renderNode');

describe('parseTag', function() {
    describe('#class', function() {
        it('should get parsed CLASS', function() {
            assert.equal("aaa bbb", parseTag('div.aaa.bbb#ccc(type="abc",value="cba")').class);
        })
    })
    describe('#id', function() {
        it('should get parsed ID', function() {
            assert.equal("ccc", parseTag('div.aaa.bbb#ccc(type="abc",value="cba")').id);
        })
    })
    describe('#properties', function() {
        it('should get parsed properties', function() {
            assert.equal('type="abc" value="cba"', parseTag('div.aaa.bbb#ccc(type="abc",value="cba")').properties);
        })
    })
})
