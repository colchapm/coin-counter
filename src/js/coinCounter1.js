const incrementCounter = (counter) => {
  // This is the termination condition.
  if (isNaN(counter)) {
    return;
  }
  if (counter >= 3) {
    return counter;
  } else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
}