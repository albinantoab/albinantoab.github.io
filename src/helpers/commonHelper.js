export const makeChunks = (arr, n) => {
  if(!arr || arr.length === 0) {
    return [];
  }
  let chunks = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks;
}

export const searchInArrayObj = (key, value, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}
