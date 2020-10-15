import { swap } from "../Algorithms/swap";

// getting the animation of insertionSort
export function getInsertionSortAnimation(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  insertionSort(animations, auxiliaryArray);
  return animations;
}


export function insertionSort(animations,array){
  for (let i = 1; i<array.length; i++) {
    let key = array[i];
    let j = i-1;
    let index = i;
    while(key < array[j] && j>=0) {
      // if we swapped add to the animation
      swap(array, j, index);
      animations.push([j, index]);
      j--;
      index--;
    }
    // if we're not swapping add only the index
    if (key > array[j]) {
      animations.push([i, i]);
    }
  }
  return array;
}
