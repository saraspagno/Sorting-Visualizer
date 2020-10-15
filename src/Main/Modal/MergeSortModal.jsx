import React from 'react';



export default class mergeSortModal extends React.Component {



  render() {
    return (
      <span className="popup" id="mergeSortPopup">
      <div className="modal-content">
      <pre>
      <div className="modal-header">
      <span className="close" id="mergeSortClose">&times;</span>
      <p className="modal-title">Merge Sort</p>
      </div>
      <div className="modal-body">
      <p className="modal-subtitle">Time Complexity:</p>
      <div className="modal-timeComplexity">
      <p>Worst Case:      O<i>(nlogn)</i></p>
      <p>Average Case:  O<i>(nlogn)</i></p>
      <p>Best Case:        O<i>(nlogn)</i></p>
      </div>
      <p className="modal-subtitle">Code (Java):</p>
      <div className="modal-code">
      <p className="comment">{"// left -> start index "} </p>
      <p className="comment">{"// right -> end index "} </p>
      <p>{"void mergeSort(int[] arr, int left, int right) {"} </p>
      <p>{"   if (left < right) {"} </p>
      <p>{"       int middle = (left+right)/2; "} </p>
      <p className="comment">{"       //sort two halves "} </p>
      <p>{"       mergeSort(arr, left, middle); "} </p>
      <p>{"       mergeSort(arr, middle+1, right); "} </p>
      <p className="comment">{"       //merge the two halves "} </p>
      <p>{"       merge(arr, left, middle, right); "} </p>
      <p>{"   } "} </p>
      <p>{"} "} </p>
      <p>{""} </p>
      <p className="comment">{"// merges two sub array"} </p>
      <p>{"void merge(int[] arr, int left, int middle, int right) {"} </p>
      <p className="comment">{"   // find sizes of two subarrays to be merged"} </p>
      <p>{"   int lenght1 = middle - left + 1; "} </p>
      <p>{"   int lenght2 = right - middle; "} </p>
      <p className="comment">{"   // create two temp arrays; "} </p>
      <p>{"   int L[] = new int[lenght1]; "} </p>
      <p>{"   int R[] = new int[lenght2]; "} </p>
      <p className="comment">{"   // copy data to temp arrays "} </p>
      <p>{"   for(int i = 0; i < lenght1; i++) { "} </p>
      <p>{"       L[i] = arr[left+1];  "} </p>
      <p>{"   } "} </p>
      <p>{"   for(int j = 0; j < lenght2; j++) { "} </p>
      <p>{"       R[j] = arr[middle+1+j];  "} </p>
      <p>{"   } "} </p>

      <p className="comment">{"   /* merge the temp arrays */ "} </p>
      <p className="comment">{"   // initial index of first and second subarrays "} </p>
      <p>{"   int i = 0, j = 0;  "} </p>
      <p className="comment">{"   // initial index of merged array  "} </p>
      <p>{"   int k = left;   "} </p>
      <p>{"   while (i < lenght1 && j < lenght2) {   "} </p>
      <p>{"       if (L[i] <= R[j]) {   "} </p>
      <p>{"           arr[k] = L[i];   "} </p>
      <p>{"           i++;   "} </p>
      <p>{"       }   "} </p>
      <p>{"       else {   "} </p>
      <p>{"           arr[k] = R[j];   "} </p>
      <p>{"           j++;   "} </p>
      <p>{"       }   "} </p>
      <p>{"       k++;   "} </p>
      <p>{"   }   "} </p>
      <p className="comment">{"   // copy remaining elemnts of L[] if any   "} </p>
      <p>{"   while (i < lenght1) {   "} </p>
      <p>{"      arr[k] = L[i];  "} </p>
      <p>{"      i++;  "} </p>
      <p>{"      k++;  "} </p>
      <p>{"   }   "} </p>
      <p className="comment">{"   // copy remaining elemnts of R[] if any   "} </p>
      <p>{"   while (j < lenght2) {   "} </p>
      <p>{"      arr[k] = R[j];  "} </p>
      <p>{"      j++;  "} </p>
      <p>{"      k++;  "} </p>
      <p>{"   }   "} </p>
      </div>
      </div>
      <div className="modal-footer">
      <span className="close-red" id="mergeSortCloseRed">Close</span>

      </div>
      </pre>
      </div>
      </span>
    )
  }
}
