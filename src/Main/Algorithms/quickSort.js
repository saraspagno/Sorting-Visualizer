import { swap } from "../Algorithms/swap";

// getting the quick sort animation
export function getQuickSortAnimation(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  quickSort(animations, auxiliaryArray, 0, array.length-1);
  return animations;
}


export function partition(animations, array, left, right) {
  var pivot   = array[right],
  i       = left,
  j       = right-1;
  //adding the pivot to the animation
  animations.push([-1,right]);
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      // add swap to animation
      animations.push([i, j]);
      i++;
      j--;
    }
  }
  swap(array,i,right);
  // add swap to animation
  animations.push([i, right]);
  return i;
}

export function quickSort(animations, array, left, right) {
  var index;
  if (left<right) {
    index = partition(animations, array, left, right);  //index returned from partition
    quickSort(animations, array, index+1, right);
    quickSort(animations, array, left, index-1);
  }
  return array;
}
