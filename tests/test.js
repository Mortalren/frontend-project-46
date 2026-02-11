import { genDiff } from '../index.js';

test('gendiff works', () => {
  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');
  
  expect(result).toContain('host: hexlet.io');
  expect(result).toContain('- timeout: 50');
  expect(result).toContain('+ timeout: 20');
  expect(result).toContain('+ verbose: true');
});