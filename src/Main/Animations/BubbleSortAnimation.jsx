import { changeColor } from "../Animations/HelperFunctions";
import { swapBars } from "../Animations/HelperFunctions";
import { makeAllBarsGreen } from "../Animations/HelperFunctions";
import { getVelocity } from "../Animations/HelperFunctions";

import { getBubbleSortAnimation } from "../Algorithms/bubbleSort";


const darkGreen = "#027524";

export async function bubbleSortAnimation(array, arrayBars,speed,buttons) {
  let velocity = getVelocity(speed,500,0.5);
  console.log(speed);
  console.log(velocity);
  const animations = getBubbleSortAnimation(array);
  var currentChangeLeft = 0;
  var currentChangeRight = 0;
  changeColor(arrayBars, 0, arrayBars.length, "grey");
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      arrayBars[currentChangeLeft].style.backgroundColor = darkGreen;
      arrayBars[currentChangeRight].style.backgroundColor = darkGreen;

      var [oldPosition, newPosition] = animations[i];
      swapBars(array , arrayBars, oldPosition, newPosition);

      currentChangeLeft = newPosition;
      currentChangeRight = oldPosition;
      changeColor(arrayBars, 0, newPosition-1, "grey");
      makeAllBarsGreen(arrayBars, animations,i,buttons);
    }, i*velocity);
  }
}
