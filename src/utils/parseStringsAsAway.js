module.exports = function parseStringAsAway(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
};