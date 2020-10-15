import React from 'react';



export default class insertionSortModal extends React.Component {
  


  render() {
    return (
      <span className="popup" id="insertionSortPopup">
      <div className="modal-content">
      <pre>
      <div className="modal-header">
      <span className="close" id="insertionSortClose">&times;</span>
      <p className="modal-title">Insertion Sort</p>
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
      <p>{"void insertionSort(int[] arr) {"} </p>
      <p>{"   int n = arr.length;"} </p>
      <p>{"   int currentKey;                     "} </p>
      <p>{"   int index;                     "} </p>
      <p className="comment">{"   // for each element in the array"} </p>
      <p>{"   for (int i=0; i < n-1; i++) {              "} </p>
      <p className="comment">{"       // setting the currentKey and index values"} </p>
      <p>{"       currentKey = arr[i]"} </p>
      <p>{"       index = i-1"} </p>
      <p className="comment">{"       /* while the element at index is bigger"} </p>
      <p className="comment">{"       then currentKey */"} </p>
      <p>{"       while (index >= 0 && arr[index] > currentKey) {"} </p>
      <p className="comment">{"           /*move the elements greater than"} </p>
      <p className="comment">{"           currentKey one position ahead"} </p>
      <p className="comment">{"           and decrease the index*/"} </p>

      <p>{"           arr[index+1] = arr[index];"} </p>
      <p>{"           index--;"} </p>
      <p>{"       }"} </p>
      <p className="comment">{"       /*finally move the currentKey back before"} </p>
      <p className="comment">{"       all the greater elements*/"} </p>
      <p>{"       arr[index+1] = currentKey"} </p>
      <p>{"   }"} </p>
      <p>{"}"} </p>
      </div>
      </div>
      <div className="modal-footer">
      <span className="close-red" id="insertionSortCloseRed">Close</span>
      </div>
      </pre>
      </div>
      </span>
    )
  }
}
