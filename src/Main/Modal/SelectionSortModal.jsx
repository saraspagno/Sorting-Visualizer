import React from 'react';



export default class selectionSortModal extends React.Component {


  render() {
    return (
      <span className="popup" id="selectionSortPopup">
      <div className="modal-content">
      <pre>
      <div className="modal-header">
      <span className="close" id="selectionSortClose">&times;</span>
      <p className="modal-title">Selection Sort</p>
      </div>
      <div className="modal-body">
      <p className="modal-subtitle">Time Complexity:</p>
      <div className="modal-timeComplexity">
      <p>Worst Case:      O<i>(n</i><sup>2</sup><i>)</i></p>
      <p>Average Case:  O<i>(n</i><sup>2</sup><i>)</i></p>
      <p>Best Case:        O<i>(n</i><sup>2</sup><i>)</i></p>
      </div>
      <p className="modal-subtitle">Code (Java):</p>
      <div className="modal-code">
      <p>{"void selectionSort(int[] arr) {"} </p>
      <p>{"   int n = arr.length;"} </p>
      <p className="comment">{"   // the index of the minimum element in the array"} </p>
      <p>{"   int indexOfMin;                     "} </p>
      <p className="comment">{"   // for each element in the array"} </p>
      <p>{"   for(int i=0; i < n-1; i++) {              "} </p>
      <p className="comment">{"       // find the min element in unsorted array"} </p>
      <p>{"       indexOfMin = i;"} </p>
      <p>{"       for (j = i + 1; j < n; j++) {"} </p>
      <p>{"           if (arr[j] < arr[indexOfMin])"} </p>
      <p>{"               indexOfMin = j;"} </p>
      <p>{"           }       "} </p>
      <p>{"       }       "} </p>
      <p className="comment">{"       // swapping the element at i with the minimum"} </p>
      <p>{"       swap(arr, indexOfMin, i) "} </p>
      <p>{"   }       "} </p>
      <p>{"}       "} </p>
      </div>
      </div>
      <div className="modal-footer">
      <span className="close-red" id="selectionSortCloseRed">Close</span>

      </div>
      </pre>
      </div>
      </span>
    )
  }
}
