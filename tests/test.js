import { RoundImage } from '../dist/index';
import assert from 'assert';
import fs from 'fs';

describe('only test', function() {
    it('checks output', function() {
        const testFile = 'test.jpg';
        const expectedOutput = `round-${testFile}`;

        if (fs.existsSync(expectedOutput)) {
            fs.unlinkSync(expectedOutput);
        }

        const result = RoundImage(testFile)
        setTimeout(() => assert.equal(fs.existsSync(expectedOutput), true), 1000);
    });
  });