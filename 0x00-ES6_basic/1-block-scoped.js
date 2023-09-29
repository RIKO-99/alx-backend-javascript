export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;// Reassigning the outer 'task' variable
    const task2 = false;// Reassigning the outer 'task2' variable

     (trueOrFalse === true) ? task : task2;

  }

  return [task, task2];
}
