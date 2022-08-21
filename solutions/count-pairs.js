"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let currentLine = 0;
let input = "";
let lines = [];

process.stdin.on("data", (raw_data) => {
  input += raw_data;
});

process.stdin.on("end", (_) => {
  lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  main();
});

function readLine() {
  return lines[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let res = [];

  for (let tc = 0; tc < t; tc++) {
    let n = parseInt(readLine());
    let a = readLine()
      .split(" ")
      .map((x) => parseInt(x));

    let ans = 0;
    let c = Array(31).fill(0);
    for (let i = 0; i < n; i++) {
      let bt = 0;
      while (a[i] > 0) {
        a[i] >>= 1;
        bt++;
      }

      if (bt == 0) ans += i;
      else ans += i - c[bt];

      c[bt]++;
    }

    res.push(ans);
  }

  console.log(res.join("\n"));
}
