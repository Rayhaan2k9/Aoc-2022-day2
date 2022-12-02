const { game, part2 } = require("./game.js");
const fs = require("fs");

function data() {
  const input = fs.readFileSync("./input.txt", "utf-8");
  const array = input.split("\n");
  return array.map((item) => item.replaceAll(" ", "").split(""));
}
const gameData = data();
describe("game", () => {
  test("returns score of single key value pair ", () => {
    expect(game([["A", "Y"]])).toBe(8);
  });

  test("returns score from multiple rounds", () => {
    expect(
      game([
        ["A", "Y"],
        ["B", "X"],
        ["C", "Z"],
      ])
    ).toBe(15);
  });

  test("final result", () => {
    expect(game(gameData)).toBe(13005);
  });
});

describe("part2", () => {
  test("returns correct score from 3 rounds", () => {
    expect(
      part2([
        ["A", "Y"],
        ["B", "X"],
        ["C", "Z"],
      ])
    ).toBe(12);
  });

  test("final result", () => {
    expect(part2(gameData)).toBe(11373);
  });
});
