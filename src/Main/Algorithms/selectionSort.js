import { swap } from "../Algorithms/swap";

export function getSelectionSortAnimation(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  selectionSort(animations, auxiliaryArray);
  return animations;
}



function selectionSort(animations, items){
  var len = items.length;
  var indexOfMin;
  for (let i=0; i < len; i++){
    indexOfMin = i;
    for (let j=i+1; j < len; j++){
      if (items[j] < items[indexOfMin]){
        indexOfMin = j;
      }
    }
    animations.push([-1,indexOfMin]);
    swap(items, i, indexOfMin);
    for (let j = i; j<indexOfMin+1; j++) {
      animations.push([-2,j]);
    }
    animations.push([i,indexOfMin]);
  }
  return items;
}
