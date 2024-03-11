'use strict';

function getElementWidth(content, padding, border) {
  const contentValue = Number.parseFloat(content);
  const paddingValue = Number.parseFloat(padding) * 2;
  const borderValue = Number.parseFloat(border) * 2;
  const elementWidth = contentValue + paddingValue + borderValue;
  return elementWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
