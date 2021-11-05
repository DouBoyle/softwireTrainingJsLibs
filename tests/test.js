import RoundImage from '../dist/index'; 
import assert from 'assert';
import fs from 'fs';


describe('only test', function() {
    it('checks output', function() {
        const testFile = 'test.jpg';
        const expectedOutput = `round-${testFile}`;
        RoundImage(testFile);
        assert.equal(fs.existsSync(expectedOutput), true);
    });
  });