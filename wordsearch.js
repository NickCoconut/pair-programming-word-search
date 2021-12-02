const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}

module.exports = wordSearch


// const wordSearch = (array, word) => {
//     find the word horizontally and vertically
//     if found
//     return true 
//     else return false
//   }