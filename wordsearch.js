// This function is used to search for a word in a 2D array of letters, considering horizontal, vertical and diagonal directions.

const wordSearch = (letters, word) => {

  // Define a reversed version of the word for backward search
  const wordReversed = word.split('').reverse().join('');
  
  // Function to transpose the input matrix
  const transpose = (matrix) => {
    const transposedMatrix = [];
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
      const newRow = [];
      for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        newRow.push(matrix[rowIndex][colIndex]);
      }
      transposedMatrix.push(newRow);
    }
    return transposedMatrix;
  };
  
  // Function to get diagonals from the input matrix
  const getDiagonals = (matrix) => {
    const diagonals = [];
    for (let k = 0; k <= 2 * (matrix.length - 1); ++k) {
      const temp = [];
      for (let y = matrix.length - 1; y >= 0; --y) {
        const x = k - y;
        if (x >= 0 && x < matrix[0].length) {
          temp.push(matrix[y][x]);
        }
      }
      if (temp.length > 0) {
        diagonals.push(temp);
      }
    }
    return diagonals;
  };
  
  // Prepare a new array, each element is the join of a row in the input matrix
  const horizontal = letters.map(ls => ls.join(''));
  // Transpose the input matrix and join each row in the transposed matrix
  const vertical = transpose(letters).map(ls => ls.join(''));
  // Get all diagonals from the input matrix and join each of them
  const diagonal = getDiagonals(letters).map(ls => ls.join(''));
  
  // Merge all arrays into a single one for the iteration
  const joinedLetters = [...horizontal, ...vertical, ...diagonal];
  
  // Iterate through each element (l) in the joinedLetters array
  for (let l of joinedLetters) {
    // Check if the current element (l) includes the target word or its reversed version
    if (l.includes(word) || l.includes(wordReversed)) return true;
  }
  
  // If the word is not found in any direction, return false
  return false;
};

// Export the wordSearch function to make it accessible to other files
module.exports = wordSearch;
