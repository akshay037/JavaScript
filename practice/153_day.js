const log = console.log;
function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const heapify = (arr, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < arr.heapSize && arr[left] > arr[i]) {
    largest = left;
  }

  if (right < arr.heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(i, largest, arr);
    heapify(arr, largest);
  }
};

const heapSort = (arr) => {
  arr.heapSize = arr.length;
  for (let i = Math.round(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(0, i, arr);
    arr.heapSize = arr.heapSize - 1;
    heapify(arr, 0);
  }
  log("arr is ", arr);
};

heapSort([8, 10, 9, 150, 5, 6, 3]);
