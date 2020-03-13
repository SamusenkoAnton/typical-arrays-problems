
exports.min = function min(array){
    if (array == null || array == undefined || array.length == 0){
        return 0;
    }
    let min = array[0];

    for (let i = 0; i < array.length;i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    console.log(min);
    return min;
}

exports.max = function max(array){
    if (array == null || array == undefined || array.length == 0){
        return 0;
    }
    let max = array[0];

    for (let i = 0; i < array.length;i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

exports.avg = function avg(array){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (array == null || array == undefined || array.length == 0){
        return 0;
    }
    array = array.reduce(reducer)/array.length;
    return array;
}
