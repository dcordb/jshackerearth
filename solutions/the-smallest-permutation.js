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

  for (let tc = 0; tc < t; tc++) {
    let n = parseInt(readLine());
    let a = readLine()
      .split(" ")
      .map((x) => parseInt(x));

    let guy = -1;
    for (let i = 0; i < n; i++) {
      if (a[i] != i + 1) {
        guy = i + 1;
        break;
      }
    }

    if (guy == -1) {
      [a[n - 2], a[n - 1]] = [a[n - 1], a[n - 2]];
    } else {
      let p = a.indexOf(guy);
      [a[guy - 1], a[p]] = [a[p], a[guy - 1]];
    }

    console.log(a.join(" "));
  }
}
