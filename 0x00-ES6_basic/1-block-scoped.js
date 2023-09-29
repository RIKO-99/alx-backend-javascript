export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;// Reassigning the outer 'task' variable
    task2 = false;// Reassigning the outer 'task2' variable
  }

  return [task, task2];
}
