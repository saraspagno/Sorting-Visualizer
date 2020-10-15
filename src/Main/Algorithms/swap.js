export function swap(array,i,j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
