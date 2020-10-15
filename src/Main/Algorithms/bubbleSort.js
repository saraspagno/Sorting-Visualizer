import { swap } from "../Algorithms/swap";



// getting the animation of bubble sort
export function getBubbleSortAnimation(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  bubbleSort(animations, auxiliaryArray);
  return animations;
}

export function bubbleSort(animations, array) {
  for (let i = 0; i < array.length; i++) {
    let len2 = array.length-i;
    for (let j = 0; j < len2; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j+1);
        // adding the saw to the animation collection
        animations.push([j, j + 1]);
      }
      else if (j+1===len2-1) {
        animations.push([j+1,j+1]);
      }
    }
  }
  return array;
}
