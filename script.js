/*
MUHAMMAD SUFI N. ARDHI
QBIT - Junior Programmer
Test2

<< TIPE DATA >>
type IComment =
{
    commentId       : Number,
    commentContent  : String,
    Replies         : IComment[];
}
*/

// Count Nested Array

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