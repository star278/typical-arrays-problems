
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length < 1) {
    return 0;
  }
  var result = array[0];
  for (var i = 1; i < array.length; i++){
    if (array[i] < result){
      result = array[i];
    }
  }
  return result;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length < 1) {
        return 0;
    }
    var result = array[0];
    for (var i = 1; i < array.length; i++){
        if (array[i] > result){
            result = array[i];
        }
    }
    return result;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length < 1) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < array.length; i++){
        result += array[i];
    }
    return result / array.length;
}
