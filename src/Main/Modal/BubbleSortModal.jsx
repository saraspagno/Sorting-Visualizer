import React from 'react';



export default class BubbleSortModal extends React.Component {

  render() {
    return (
      <span className="popup" id="bubbleSortPopup">
      <div className="modal-content">
      <pre>
      <div className="modal-header">
      <span className="close" id="bubbleSortClose">&times;</span>
      <p className="modal-title">Bubble Sort</p>
      </div>
      <div className="modal-body">
      <p className="modal-subtitle">Time Complexity:</p>
      <div className="modal-timeComplexity">
      <p>Worst Case:      O<i>(n</i><sup>2</sup><i>)</i></p>
      <p>Average Case:  O<i>(n</i><sup>2</sup><i>)</i></p>
      <p>Best Case:        O<i>(n )</i></p>
      </div>
      <p className="modal-subtitle">Code (Java):</p>
      <div className="modal-code">
      <p>{"void bubbleSort(int[] arr) {                "} </p>
      <p>{"   int n = arr.length;                       "} </p>
      <p className="comment">{"   // for each element in the array"} </p>
      <p>{"   for(int i=0; i < n-1; i++) {              "} </p>
      <p className="comment">{"       // for each element after the i"} </p>
      <p>{"       for(int j=0; j < (n-i)-1; j++) {        "} </p>
      <p className="comment">{"         // if next element is smalleer than current"} </p>
      <p>{"           if(arr[j] > arr[j+1]) {               "} </p>
      <p>{"               swap(arr, j, i);                    "} </p>
      <p>{"           }                                     "} </p>
      <p>{"       }                                      "} </p>
      <p>{"   }                                        "} </p>
      <p>{"}                                           "} </p>
      </div>
      </div>
      <div className="modal-footer">
      <span className="close-red" id="bubbleSortCloseRed">Close</span>

      </div>
      </pre>
      </div>
      </span>
    )
  }
}
