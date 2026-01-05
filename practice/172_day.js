const arr = [45, 63, 1, 23, 7, 5, 3, 1];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const quickSort = (arr, lIdx, rIdx) => {
  if (lIdx < rIdx) {
    const pivot = partition(arr, lIdx, rIdx);
    quickSort(arr, lIdx, pivot - 1);
    quickSort(arr, pivot + 1, rIdx);
  }
};

const partition = (arr, lIdx, rIdx) => {
  const pivotVal = arr[rIdx];
  let i = lIdx - 1;
  for (let j = lIdx; j < rIdx; j++) {
    if (arr[j] <= pivotVal) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, rIdx);
  return i + 1;
};

quickSort(arr, 0, arr.length - 1);
console.log(arr);
