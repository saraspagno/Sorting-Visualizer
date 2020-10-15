import { swap } from "../Algorithms/swap";

// getting the merge sort animation
export function getMergeSortAnimation(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  mergeSort(auxiliaryArray, 0, array.length - 1, animations);
  return animations;
}

function mergeSort(array,startIdx,endIdx,animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSort(array, startIdx, middleIdx, animations);
  mergeSort(array, middleIdx + 1, endIdx, animations);
  merge(animations, array, startIdx, endIdx);
}

function merge(animations, array, left, right){
  if (left===right) return;
  for (let i=left; i<right+1; i++) {
    let indexOfMin = findMin(array, i, right);
    // swaping the i with the current min
    swap(array,i, indexOfMin);
    // pushing animation
    animations.push([indexOfMin,i]);
  }
  return array;
}

// function to find the min in a current array
function findMin(array,left,right) {
  let min = 600;
  let indexOfMin = 0;
  for (let i = left; i<right+1; i++) {
    if (array[i] < min) {
      min = array[i];
      indexOfMin = i;
    }
  }
  return indexOfMin;
}
