import * as assert from 'assert';
import { describe, it } from 'mocha';

describe('Sample Extension Tests', () => {
	it('numbers behave as expected', () => {
		assert.strictEqual([1, 2, 3].indexOf(4), -1);
	});
});
