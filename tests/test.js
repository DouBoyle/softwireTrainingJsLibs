import RoundImage from '../dist/round';
import assert from 'assert';
import fs from 'fs';

describe('only test', function() {
    it('checks output', function() {
        const testFile = 'test.jpg';
        const expectedOutput = `round-${testFile}`;

        if (fs.existsSync(expectedOutput)) {
            fs.unlinkSync(expectedOutput);
        }

        const result = RoundImage(
            testFile,
            () => assert.equal(
                fs.existsSync(expectedOutput),
                 true
            )
        );
    });
  });