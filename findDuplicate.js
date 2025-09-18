
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]; // Duplicate found
      }
    }
  }
  return null; // No duplicate found
}

// Example usage:
const array = [1, 2, 3, 4, 2];
const duplicate = findDuplicate(array);

console.log("Duplicate number:", duplicate);
