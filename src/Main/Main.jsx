import React from 'react';
import BubbleSortModal from "./Modal/BubbleSortModal.jsx"
import SelectionSortModal from "./Modal/SelectionSortModal.jsx"
import InsertionSortModal from "./Modal/InsertionSortModal.jsx"
import QuickSortModal from "./Modal/QuickSortModal.jsx"
import MergeSortModal from "./Modal/MergeSortModal.jsx"
import Footer from "./Footer/Footer.jsx"


// the css files
import './ToolbarDesign/Toolbar.css';
import './ToolbarDesign/Popup.css';
import './BodyDesign/Box.css'
import './BodyDesign/Body.css'

// the logo
import logo from './logo.png'

// animation running variable
import isRunning from './Animations/HelperFunctions';


// animations functions
import { bubbleSortAnimation } from "./Animations/BubbleSortAnimation";
import { selectionSortAnimation } from "./Animations/SelectionSortAnimation";
import { insertionSortAnimation } from "./Animations/InsertionSortAnimation";
import { quickSortAnimation } from "./Animations/QuickSortAnimation";
import { mergeSortAnimation } from "./Animations/MergeSortAnimation";


var numberOfArrayBars = 100;

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      isRunningState: false,
      speed: 2,
    };
    this.handleSize = this.handleSize.bind(this);
    this.handleSpeed = this.handleSpeed.bind(this);

  }


  componentDidMount() {
    //setting the array
    const array = [];
    for (let i = 0; i <numberOfArrayBars; i++) {
      let max = 80;
      let min = 1;
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array });
  }

  // function that resets the array values
  resetArray() {
    if(!isRunning.value) {
      const array = [];
      for (let i = 0; i <numberOfArrayBars; i++) {
        let max = 80;
        let min = 1;
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
      }
      this.setState({ array });
      const arrayBars = document.getElementsByClassName("array-bar");
      var arrayLength = arrayBars.length;
      for (let j = 0; j < arrayLength; j++) {
        var jBarStyle = arrayBars[j].style;
        jBarStyle.backgroundColor ="#FE6B64";
      }
    }
  }

  // handles the clicks of the toolbar buttons
  handleClick(algorithm) {
    if (!isRunning.value) {
      const arrayToChange = this.changeStyle();
      const array = this.state.array;
      const arrayBars = document.getElementsByClassName("array-bar");
      let doSort = algorithm === "bubbleSort" ?
      bubbleSortAnimation : algorithm === "insertionSort" ?
      insertionSortAnimation : algorithm === "selectionSort" ?
      selectionSortAnimation : algorithm === "quickSort" ?
      quickSortAnimation : algorithm === "mergeSort" ?
      mergeSortAnimation : null;
      doSort(array,arrayBars,this.state.speed,arrayToChange);
    }
  }


  /* changing the className of some elements in order to change
  their style during animation */
  changeStyle() {
    const buttons = document.getElementsByClassName("buttons");
    const reset = document.getElementById("reset");
    const stop = document.getElementById("stop-disable");
    const sliders = document.getElementsByClassName("slider");

    const arrayToChange = [];
    for (let i=0; i<buttons.length; i++) {
      buttons[i].classList.add('buttons-disable');
      arrayToChange.push(buttons[i]);
    }
    reset.classList.add('reset-disable');
    reset.classList.remove('reset');
    stop.classList.add('stop');
    stop.classList.remove('stop-disable');
    for (let i=0; i<sliders.length; i++) {
      sliders[i].classList.add('slider-disable');
      arrayToChange.push(sliders[i]);
    }
    arrayToChange.push(reset);
    arrayToChange.push(stop);

    isRunning.value = true;
    this.setState({isRunningState: "true" });
    return arrayToChange;
  }

  // this functions handles the changes in the size input bar
  handleSize(evt) {
    if (!isRunning.value) {
      numberOfArrayBars  = 2*parseInt(evt.target.value);
      this.resetArray();
    }
  }

  // this functions handles the changes in the speed input bar
  handleSpeed(evt) {
    this.setState({ speed: 50-parseInt(evt.target.value) });
  }

  // this functions handles the click on the info buttons
  infoHandleClick(algorithm) {
    var modal = document.getElementById(algorithm+"Popup");
    modal.style.display = "block";
    var span1 = document.getElementById(algorithm+"Close");
    var span2 = document.getElementById(algorithm+"CloseRed");
    span1.onclick = function() {
      modal.style.display = "none";
    }
    span2.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }


  refreshPage() {
    if (isRunning.value) {
      window.location.reload(false);
    }
  }


  render() {
    const {array} = this.state;
    return (
      <div className="page">
      <div className="toolbar">
      <img className = "logo" src={logo} alt="logo" onClick={() => window.location.reload(false)}/>
      <div className = "menu">
      <span className = "buttons" onClick={() => this.handleClick("bubbleSort")}> Bubble Sort</span>
      <span className = "info" onClick={() => this.infoHandleClick("bubbleSort")}/>
      <BubbleSortModal/>
      <span className = "buttons" onClick={() => this.handleClick("selectionSort")}> Selection Sort</span>
      <span className = "info" onClick={() => this.infoHandleClick("selectionSort")}/>
      <SelectionSortModal/>
      <span className = "buttons" onClick={() => this.handleClick("insertionSort")}> Insertion Sort</span>
      <span className = "info" onClick={() => this.infoHandleClick("insertionSort")}/>
      <InsertionSortModal/>
      <span className = "buttons" onClick={() => this.handleClick("quickSort")}> Quick Sort</span>
      <span className = "info" onClick={() => this.infoHandleClick("quickSort")}/>
      <QuickSortModal/>
      <span className = "buttons" onClick={() => this.handleClick("mergeSort")}> Merge Sort</span>
      <span className = "info" onClick={() => this.infoHandleClick("mergeSort")}/>
      <MergeSortModal/>
      </div>
      </div>
      <div className="body">
      <div className="box">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/glacial-indifference" type="text/css"/>
      <span className="reset" id = "reset" onClick={() => this.resetArray()}> Generate Array </span>
      <p> Size: </p>
      <input
      className="slider"
      id="changeSize"
      type="range"
      min="8"
      max="100,5"
      onChange={this.handleSize}
      />
      <p> Speed: </p>
      <input
      className="slider"
      id="changeSpeed"
      type="range"
      min="0"
      max="99"
      step="3"
      onChange={this.handleSpeed}
      />
      <span className = "stop-disable" id = "stop-disable" onClick={this.refreshPage}> STOP ANIMATION </span>
      </div>
      <div className="array-container">
      <div className="pseudo"></div>
      {array.map((value, idx) => (
        <div
        className="array-bar"
        key={idx}
        style={{
          height: `${value}vh`,
          width: `${75.8/numberOfArrayBars - 0.07}vw`,
        }}>
        </div>
      ))}
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}
