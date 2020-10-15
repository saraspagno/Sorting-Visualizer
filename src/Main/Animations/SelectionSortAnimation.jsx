import { getSelectionSortAnimation } from "../Algorithms/selectionSort";
import { changeColor } from "../Animations/HelperFunctions";
import { swapBars } from "../Animations/HelperFunctions";
import { makeAllBarsGreen } from "../Animations/HelperFunctions";
import { getVelocity } from "../Animations/HelperFunctions";


const yellow = "#FDFD98";
const purple = "#573B8C";
const darkGreen = "#027524";




export async function selectionSortAnimation(array,arrayBars,speed,buttons) {
  let velocity = getVelocity(speed,400,0.2);

  const animations = getSelectionSortAnimation(array);
  var currentChangeRight = 0;
  var index = 0;
  var min = 0;
  changeColor(arrayBars, 0, arrayBars.length, "grey");

  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      arrayBars[currentChangeRight].style.backgroundColor = "grey";
      var [oldPosition, newPosition] = animations[i];
      var newBarStyle = arrayBars[newPosition].style;
      if (oldPosition === -2) {
        currentChangeRight = newPosition;
        newBarStyle.backgroundColor = yellow;
      }
      else if (oldPosition === -1) {
        arrayBars[min].style.backgroundColor = "grey";
        min = newPosition;
        newBarStyle.backgroundColor = purple;
      }
      else {
        swapBars(array,arrayBars, oldPosition, newPosition);
        newBarStyle.backgroundColor = "grey";
        index++;
      }
      changeColor(arrayBars, 0, index, darkGreen);
      makeAllBarsGreen(arrayBars, animations,i,buttons);
    }, i*velocity);
  }
}
