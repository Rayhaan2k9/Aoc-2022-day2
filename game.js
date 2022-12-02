function game(input) {
  let score = 0;

  //   A - Rock
  //   B - Paper
  //   C - Scisoors
  //   X - Rock
  //   Y - Paper
  //   Z - Scisoors

  const shapeScores = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };

  for (let i = 0; i < input.length; i++) {
    score += shapeScores[input[i][1]];
    if (
      (input[i][0] === "A" && input[i][1] === "Y") ||
      (input[i][0] === "B" && input[i][1] === "Z") ||
      (input[i][0] === "C" && input[i][1] === "X")
    ) {
      score += 6;
    } else if (
      (input[i][0] === "A" && input[i][1] === "X") ||
      (input[i][0] === "B" && input[i][1] === "Y") ||
      (input[i][0] === "C" && input[i][1] === "Z")
    ) {
      score += 3;
    }
  }

  return score;
}

function part2(input) {
  const clonedInput = [...input];
  const outcomes = {
    X: "lose",
    Y: "draw",
    Z: "win",
  };
  let score = 0;

  //   A - Rock
  //   B - Paper
  //   C - Scisoors
  //   X - Rock
  //   Y - Paper
  //   Z - Scisoors

  const shapeScores = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };

  const winningCombos = {
    A: "Y",
    B: "Z",
    C: "X",
  };

  const drawCombos = {
    A: "X",
    B: "Y",
    C: "Z",
  };

  const losingCombos = {
    A: "Z",
    B: "X",
    C: "Y",
  };

  for (let i = 0; i < input.length; i++) {
    if (outcomes[input[i][1]] === "win") {
      clonedInput[i][1] = winningCombos[input[i][0]];
    } else if (outcomes[input[i][1]] === "draw") {
      clonedInput[i][1] = drawCombos[input[i][0]];
    } else {
      clonedInput[i][1] = losingCombos[input[i][0]];
    }
    score += shapeScores[input[i][1]];
    if (
      (input[i][0] === "A" && input[i][1] === "Y") ||
      (input[i][0] === "B" && input[i][1] === "Z") ||
      (input[i][0] === "C" && input[i][1] === "X")
    ) {
      score += 6;
    } else if (
      (input[i][0] === "A" && input[i][1] === "X") ||
      (input[i][0] === "B" && input[i][1] === "Y") ||
      (input[i][0] === "C" && input[i][1] === "Z")
    ) {
      score += 3;
    }
  }

  return score;
}

module.exports = { game, part2 };
