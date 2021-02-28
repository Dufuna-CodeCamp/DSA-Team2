function minJumps(arr, n) {
  // jumps[n-1] will
  // hold the result
  let jumps = [n];
  if (n == 0 || arr[0] == 0) return 999999;
  jumps[0] = 0;
  // Find the minimum number of
  // jumps to reach arr[i]
  // from arr[0], and assign
  // this value to jumps[i]
  for (let i = 1; i < n; i++) {
    jumps[i] = 999999;
    for (let j = 0; j < i; j++) {
      if (i <= j + arr[j] && jumps[j] != 999999) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }
  return jumps[n - 1];
}

let arr = [2, 3, 1, 1, 4];
let size = arr.length;

// display result on the page
window.addEventListener("load", () => {
  const output = document.querySelector(".output");
  output.textContent = `
          Output: ${minJumps(arr, size)}
      `;
  console.log("loaded");
});
