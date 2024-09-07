/*
In the underground world of bunnies, mafia and corruption have taken over. 
Snowball is on a mission to infiltrate a certain deserted military hanger, 
supposedly filled with convict bunnies.
*/
function bunnyKill(input) {
  let bombCoordinates = input.pop().split(" ");
  // Modifying the data
  for (let idx = 0; idx < input.length; idx++) {
    let element = input[idx].split(" ").map((x) => Number(x));
    input[idx] = element;
  }
  // Shooting the bonnies with bombs and calculating the damage they do
  let damage = 0;
  let killCount = 0;
  for (let bomb of bombCoordinates) {
    bomb = bomb.split(",");
    const row = Number(bomb[0]);
    const column = Number(bomb[1]);
    let killedBunny = input[row][column];
    if (killedBunny <= 0) {
      continue;
    }
    damage += Number(killedBunny);
    killCount++;

    for (let i = row - 1; i <= row + 1; i++) {
      if (i < 0 || i >= input.length) {
        continue;
      }
      for (let j = column - 1; j <= column + 1; j++) {
        if (j < 0 || j >= input[i].length) {
          continue;
        }
        input[i][j] -= killedBunny;
        if (input[i][j] < 0) {
          input[i][j] = 0;
        }
      }
    }
  }
  // Killing the bonnies that left after the bombs
  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      let currentBunny = input[row][column];
      if (currentBunny > 0) {
        damage += Number(currentBunny);
        killCount++;
      }
      input[row][column] = 0;
    }
  }
  // Showing the result on the console
  console.log(damage);
  console.log(killCount);
}
bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",
]);
bunnyKill([
    "10 10 10", 
    "10 10 10", 
    "10 10 10", 
    "0,0"
]);