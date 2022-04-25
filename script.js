const comments = [1, [11, [111, 112], 12, [121]], 2];

Array.prototype.getLength = function () {
    function getMultiLength(array) {
        var sum = 0;
        for (var count = 0; count < array.length; count++) {
            if (Array.isArray(array[count])) {
                sum += getMultiLength(array[count]);
            } else {
                sum++;
            }
        }
        return sum;
    }

    return getMultiLength(this.valueOf());
};

console.log("Jumlah Komentar yaitu " + (comments.getLength()));