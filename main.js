// Prompt 1 

// Variable declration
// To test different ratings, comment/uncomment which array you want to test

let ratings = [];
//let ratings = [-1,1,1,1];
//let ratings = [-1,1,-1,-1,-1];
//let ratings = [-1,-1,1,1];
//let ratings = [1,1,1,1,1];

function getThumbsRating(ratings) {
    const up = "👍";
    const down = "👎";
    const none = "✊";
    let average = 0;
    // Variables

    for (i=0; i < ratings.length; i++){
        average = (+ratings[i] /ratings.length);
        console.log(average);
    }// Loops through the array, adding each number in the array and outputs a total

     if (average > 0) {
            return up; // Returns a thumbsup if rating is positive
        } 
        else if (average < 0) {
            return down; // Returns a thumbsdown if rating is negative
        } 
        else if (average = 0){
            return none; // Returns a fist if rating is equal to zero
      }
        else {
            return none;
        }
  }
getThumbsRating(ratings);
console.log(getThumbsRating(ratings));

// Prompt 2

// Variable declaration
const storeSet1 = [{sales: 123411, area: 1234}, {sales: 5026107, area: 20712}, {sales: 23121, area: 901}, {sales: 4121928, area: 4993}];
const storeSet2 = [{sales: 123411, area: 1234}];
const storeSet3 = [{sales: 123411, area: 1234}, {sales: 123411, area: 1234}];

function getNearestCompetingStore(stores) {
  return [];
}
