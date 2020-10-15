import { getQuickSortAnimation } from "../Algorithms/quickSort";
import { changeColor } from "../Animations/HelperFunctions";
import { swapBars } from "../Animations/HelperFunctions";
import { makeAllBarsGreen } from "../Animations/HelperFunctions";
import { getVelocity } from "../Animations/HelperFunctions";

const purple = "#573B8C";
const darkGreen = "#027524";


export async function quickSortAnimation(array,arrayBars,speed,buttons) {
  let velocity = getVelocity(speed,600,205);
  console.log(velocity);
  const animations = getQuickSortAnimation(array);
  var pivot = 0;
  var currentChangeLeft = 0;
  var currentChangeRight = 0;

  changeColor(arrayBars, 0, arrayBars.length, "grey");
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      if (currentChangeLeft!==pivot) {
        arrayBars[currentChangeLeft].style.backgroundColor = "grey";
      }
      arrayBars[currentChangeRight].style.backgroundColor = "grey";
      var [oldPosition, newPosition] = animations[i];
      var newBarStyle = arrayBars[newPosition].style;
      // it's the pivot
      if (oldPosition===-1) {
        // the old pivot becomes green
        var oldPivotStyle = arrayBars[pivot].style;
        oldPivotStyle.backgroundColor = darkGreen;
        // the new pivot becomes purple
        newBarStyle.backgroundColor = purple;
        pivot = newPosition;
      }
      else {
        var oldBarStyle = arrayBars[oldPosition].style;
        swapBars(array,arrayBars, oldPosition, newPosition);
        currentChangeLeft = newPosition;
        currentChangeRight = oldPosition;
        if (pivot===newPosition) {
          oldBarStyle.backgroundColor = purple;
        }
      }
      changeColor(arrayBars, pivot+1, arrayBars.length, darkGreen);
      makeAllBarsGreen(arrayBars, animations,i,buttons);
    },i * velocity);
  }
}
