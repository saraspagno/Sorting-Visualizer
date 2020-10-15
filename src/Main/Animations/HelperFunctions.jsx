const SWAP_COLOR = "#FDFD98";

const darkGreen = "#027524";
const lightGreen = "#77DD77";

let audio = new Audio("/Users/saraspagnoletto/sort/src/Main/Toolbar/swap.mp3");


const isRunning = {
  value: false,
};


export default isRunning;

export function getVelocity(speed, max, min) {
  var slope = (max-min)/(99);
  var coefficent = max - slope*100;
  return slope*speed + coefficent;
}

export function changeColor(arrayBars, start,end,color) {
  for (let i = start; i < end; i++) {
    var jBarStyle = arrayBars[i].style;
    jBarStyle.backgroundColor = color;
  }
}

export function swapBars(array, arrayBars, oldPosition, newPosition) {
  var oldBarStyle = arrayBars[oldPosition].style;
  var newBarStyle = arrayBars[newPosition].style;

  var temp = array[oldPosition];
  array[oldPosition] = array[newPosition];
  array[newPosition] = temp;

  oldBarStyle.height = `${array[oldPosition]}vh`
  newBarStyle.height = `${array[newPosition]}vh`;

  oldBarStyle.backgroundColor = SWAP_COLOR;
  newBarStyle.backgroundColor = SWAP_COLOR;
}

export function makeAllBarsGreen(arrayBars, animations, i, buttons) {
  if (i === (animations.length - 1)) {
    changeColor(arrayBars, 0, arrayBars.length, darkGreen);
    for (let j = 0; j < arrayBars.length; j++) {
      setTimeout(() => {
        arrayBars[j].style.backgroundColor = lightGreen;
        if (j === arrayBars.length-1) {
          audio.play();
          isRunning.value = false;

          for (let i=0; i<5; i++) {
            buttons[i].classList.remove('buttons-disable');
            buttons[i].classList.add('buttons');
          }
          for (let i=5; i<7; i++) {
            buttons[i].classList.remove('slider-disable');
            buttons[i].classList.add('slider');
          }
          buttons[7].classList.add('reset');
          buttons[7].classList.remove('reset-disable');
          buttons[8].classList.add('stop-disable');
          buttons[8].classList.remove('stop');
        }
      }, j*5);
    }
  }
}
