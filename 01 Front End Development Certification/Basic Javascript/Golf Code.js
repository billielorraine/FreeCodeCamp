/*In the game of golf each hole has a par for the average number of strokes needed to sink the ball. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed a par and strokes. Return strings according to this table (based on order of priority - top (highest) to bottom (lowest)):
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. */

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes==1) {
    return "Hole-in-one!";
  }
  else if (strokes<=par-2) {
    return "Eagle";
  }
  else if (strokes==par-1) {
    return "Birdie";
  }
  else if (strokes==par) {
    return "Par";
  }
  else if (strokes==par+1) {
    return "Bogey";
  }
  else if (strokes==par+2) {
    return "Double Bogey";
  }

  else if (strokes>=par+3) {
    return "Go Home!";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(4,1);
golfScore(4,2);
golfScore(5,2);
golfScore(4,3);
golfScore(4,4);
golfScore(1,1);
golfScore(5,5);
golfScore(4,5);
golfScore(4,6);
golfScore(4,7);
golfScore(5,9);
