function fibs(n) {
  const arr = [0, 1];
  if (n < 2) {
    return arr;
  } else {
    for (let i = 2; i < n; i++) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
    return arr;
  }
}

function fibsRec(n, arr = [0, 1]) {
  if (arr[n] != null) {
    return arr[n];
  }
  let memo;
  if (n < 2) {
    return (memo = 1);
  } else {
    memo = fibsRec(n - 2, arr) + fibsRec(n - 1, arr);
  }
  arr[n] = memo;
  console.log(arr);

  return memo;
}
