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

function gcd(a, b) {
  if (b == 0) return a;

  return gcd(b, a % b);
}

function main() {
  let t = parseInt(readLine());
  let res = [];

  for (let tc = 0; tc < t; tc++) {
    let n = parseInt(readLine());
    let a = readLine()
      .split(" ")
      .map((x) => parseInt(x));

    let g = a.reduce(gcd, 0);
    let ans = 0;

    for (let o of a) {
      ans += o / g - 1;
    }

    res.push(ans);
  }

  console.log(res.join("\n"));
}
