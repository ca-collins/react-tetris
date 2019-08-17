export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  // Creates an array with 20 elems. Each of the 20 elems are an array with 12 elements.
  // Each of the 12 elems are an array with 2 elements. These 2 elems are the values 0 and clear
  // Effectivly making the number of elements equal to the STAGE_HEIGHT * STAGE_WIDTH (each with a value of 0 or clear)
   Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']))
