import { readFileSync } from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {
    const readFile = (filepath) => {
    const fullPath = path.resolve(filepath);
    const content = readFileSync(fullPath, 'utf-8');
    return JSON.parse(content);
    }
const data1 = readFile(filepath1);
const data2 = readFile(filepath2);

const allKeys = Object.keys({ ...data1, ...data2 }).sort();
  let result = '{\n';
    allKeys.forEach((key) => {
    const in1 = key in data1;
    const in2 = key in data2;
    
    if (!in1) {
      result += `  + ${key}: ${data2[key]}\n`;
    } else if (!in2) {
      result += `  - ${key}: ${data1[key]}\n`;
    } else if (data1[key] === data2[key]) {
      result += `    ${key}: ${data1[key]}\n`;
    } else {
      result += `  - ${key}: ${data1[key]}\n`;
      result += `  + ${key}: ${data2[key]}\n`;
    }
  });
  result += '}';
  return result;
};
export default genDiff;