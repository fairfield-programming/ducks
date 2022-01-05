const duckGenerator = require('./DuckGenerator');
const duckStringParser = require('./DuckStringParser');

module.exports = {
    ...duckGenerator,
    ...duckStringParser
};