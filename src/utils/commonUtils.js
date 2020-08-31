"use strict";

const fs = require('fs');

const fileDeepPath = (path) => {
  try {
    let absolute_array = [],
      paths = fs.readdirSync(path);
    paths.forEach((v) => {
      let files = fs.lstatSync(path + '/' + v);
      if (files.isDirectory()) {
        let result = filePath(path + '/' + v);
        absolute_array = absolute_array.concat(result);
      } else {
        absolute_array.push((path + '/' + v));
      }
    });
    return absolute_array;
  } catch (e) {
    console.log('error', e);
  }
}

module.exports = {
  fileDeepPath
}