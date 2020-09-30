const { sort } = require("semver");

exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        //проверка на массив и есть ли что-то в нем
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let allParam = 0;

        for (let i = 0; i < array.length; i++) {
            allParam += array[i];
        }
        allParam = allParam / array.length;

        return allParam;
    }
};
