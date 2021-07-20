const incrementChange = (Change) => {
  // This is the termination condition.
  if (isNaN(Change)) {
    return;
  }
  if (Change >= 99) {
    return Change;
  } else {
    // if((Change % 25) == 0) {
    //   Change % 25
    }
    
    return incrementChange(Change + 1);
  }
}