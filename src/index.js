
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
    const sortedArray = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        if (!Array.isArray(row)) {
            continue;
        }
        if (i % 2 !== 0) {
            row = row.slice().reverse();
        }
        sortedArray.push(...row);
    }
    return sortedArray;
}
