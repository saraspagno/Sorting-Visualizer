import { getInsertionSortAnimation } from "../Algorithms/insertionSort";
import { changeColor } from "../Animations/HelperFunctions";
import { swapBars } from "../Animations/HelperFunctions";
import { makeAllBarsGreen } from "../Animations/HelperFunctions";
import { getVelocity } from "../Animations/HelperFunctions";

const darkGreen = "#027524";




export async function insertionSortAnimation(array,arrayBars,speed,buttons) {
  let velocity = getVelocity(speed,500,100);
  console.log(velocity);
  const animations = getInsertionSortAnimation(array);


  var currentChangeRight = 0;
  changeColor(arrayBars, 0, arrayBars.length, "grey");

  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      arrayBars[currentChangeRight].style.backgroundColor = darkGreen;
      var [oldPosition, newPosition] = animations[i];
      swapBars(array,arrayBars, oldPosition, newPosition);
      arrayBars[newPosition].style.backgroundColor = darkGreen;
      currentChangeRight = oldPosition;
      changeColor(arrayBars, 0, oldPosition, darkGreen);
      makeAllBarsGreen(arrayBars, animations,i,buttons);
    }, i*velocity);
  }
}
