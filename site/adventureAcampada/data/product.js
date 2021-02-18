const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/product.json','utf-8'));