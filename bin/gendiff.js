#!/usr/bin/env node
import { program } from 'commander'
import { genDiff } from '../index.js'

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
