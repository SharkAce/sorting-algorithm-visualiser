function start() {
  run = 1;
  let nums = randomArr(size);
  let key = getCheckedElement();
  init(key)
  FRAMES = selectAlg(key, [...nums])
  frame = 0;
  setTimeout(() => {
    run = 0;
  }, 25);
  setTimeout(() => {
    run = 1;
  }, 100);
}