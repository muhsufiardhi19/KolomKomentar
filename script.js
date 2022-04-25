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

// Count Nested Array Kolom Komentar

const comments = [1, [11, [111, 112], 12, [121]], 2];
const countKeys = (comments) => {
  let count = 0;

  const helper = (comments) => {
    for (let value of Object.values(comments)) {
      if (typeof value === 'object') {
        helper(value);
      }
     
      if (!Array.isArray(value)) count++;
    }
  }
  helper(comments)
  return count;
}
console.log("Jumlah Komentar yaitu: " + countKeys(comments))