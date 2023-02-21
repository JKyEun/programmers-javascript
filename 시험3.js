let grid = [".....####", "..#...###", ".#.##..##", "..#..#...", "..#...#..", "...###..."];

function solution(grid) {
  var answer = 0;
  let isBlocked = false;
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('');
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === '.') {
          }
          if (grid[i][j] === '#') {
              answer++;
          }
      }
  }
  console.log(grid);
  return answer;
}

solution(grid);