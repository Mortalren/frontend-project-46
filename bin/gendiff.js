#!/usr/bin/env node
import { program } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';
import { genDiff } from '../index.js';

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = readFileSync(absolutePath, 'utf-8');
  const ext = path.extname(filepath).slice(1);
  
  if (ext === 'json') {
    return JSON.parse(content);
  }
  throw new Error(`Unsupported format: ${ext}`);
}

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
.action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    console.log('Parsed data:', data1, data2);
})
 .action((filepath1, filepath2) => {
    const result = genDiff(filepath1, filepath2);
    console.log(result);
    })



  .parse(process.argv);
