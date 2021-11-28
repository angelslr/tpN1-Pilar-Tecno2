const app = require('./app');
const expect = require('chai').expect;

describe('Simple Math Test', () => {
    it('should return string', () => {
        expect(app._test.getCountryByIso3()).to.be.an('int');
    });
    it('should return string', () => {
        expect(app._test.getCountryTranslatedName()).to.be.an('string');
    });
});
