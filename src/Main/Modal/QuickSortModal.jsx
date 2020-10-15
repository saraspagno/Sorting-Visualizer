import React from 'react';



export default class quickSortModal extends React.Component {



  render() {
    return (
      <span className="popup" id="quickSortPopup">
      <div className="modal-content">
      <pre>
      <div className="modal-header">
      <span className="close" id="quickSortClose">&times;</span>
      <p className="modal-title">Quick Sort</p>
      </div>
      <div className="modal-body">
      <p className="modal-subtitle">Time Complexity:</p>
      <div className="modal-timeComplexity">
      <p>Worst Case:      O<i>(n</i><sup>2</sup><i>)</i></p>
      <p>Average Case:  O<i>(nlogn)</i></p>
      <p>Best Case:        O<i>(nlogn)</i></p>
      </div>
      <p className="modal-subtitle">Code (Java):</p>
      <div className="modal-code">
      <p className="comment">{"// left -> start index"} </p>
      <p className="comment">{"// right -> end index"} </p>
      <p>{"void quickSort(int[] arr, int left, int right) {"} </p>
      <p>{"   if (left < right) { "} </p>
      <p className="comment">{"       /* by calling partion arr[index] is now at"} </p>
      <p className="comment">{"       the right sorted place*/"} </p>
      <p>{"       int index = partition(arr, left, right); "} </p>
      <p>{"       quickSort(arr, left, index - 1); "} </p>
      <p>{"       quickSort(arr, index + 1, right); "} </p>
      <p>{"   } "} </p>
      <p>{"}"} </p>
      <p>{""} </p>
      <p className="comment">{"/* this function places the pivot in its"} </p>
      <p className="comment">{"right sorted position, with all greater elements"} </p>
      <p className="comment">{"on the right, and all smaller on the left */"} </p>
      <p>{"int partition(int[] arr, int left, int right) {"} </p>
      <p>{"   int pivot = arr[right]; "} </p>
      <p className="comment">{"   // the smallest element"} </p>
      <p>{"   int indexOfMin = left-1;"} </p>
      <p>{"   for (int j = left; j < right - 1; j++) {"} </p>
      <p className="comment">{"       // if current element is smaller than pivot"} </p>
      <p>{"       if (arr[j] < pivot) {"} </p>
      <p className="comment">{"           // increasing the indexOfMin and swapping "} </p>
      <p>{"           indexOfMin++; "} </p>
      <p>{"           swap(arr, indexOfMin, j); "} </p>
      <p>{"        } "} </p>
      <p>{"    } "} </p>
      <p className="comment">{"    // swapping the pivot at the right place  "} </p>
      <p>{"    swap(arr, i+1, right);  "} </p>
      <p>{"    return i+1;   "} </p>
      <p>{"} "} </p>
      </div>
      </div>
      <div className="modal-footer">
      <span className="close-red" id="quickSortCloseRed">Close</span>
      </div>
      </pre>
      </div>
      </span>
    )
  }
}
