import { getMergeSortAnimation } from "../Algorithms/mergeSort";
import { changeColor } from "../Animations/HelperFunctions";
import { swapBars } from "../Animations/HelperFunctions";
import { makeAllBarsGreen } from "../Animations/HelperFunctions";
import { getVelocity } from "../Animations/HelperFunctions";


const darkGreen = "#027524";


export async function mergeSortAnimation(array,arrayBars,speed,buttons) {
  let velocity = getVelocity(speed,450,152);
  const animations = getMergeSortAnimation(array);

  var currentChangeLeft = 0;
  var currentChangeRight = 0;
  changeColor(arrayBars, 0, arrayBars.length, "grey");

  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      arrayBars[currentChangeLeft].style.backgroundColor = darkGreen;
      arrayBars[currentChangeRight].style.backgroundColor = darkGreen;
      var [oldPosition, newPosition] = animations[i];
      swapBars(array, arrayBars, oldPosition, newPosition);
      currentChangeLeft = newPosition;
      currentChangeRight = oldPosition;
      makeAllBarsGreen(arrayBars,animations,i,buttons);
    }, i*velocity);
  }
}
