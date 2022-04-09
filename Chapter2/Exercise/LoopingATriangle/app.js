/*
  TODO - Write a loop that makes seven calls to console.log() to output the following triangle
  -> #
  -> ##
  -> ###
  -> ####
  -> #####
  -> ######
  -> #######
  -> ########
  -> #########
  -> ##########
*/

alert("Write a loop that makes seven calls to console.log() to output a triangle with #");

let triangleCreation = "#";

while (triangleCreation.length <= 10) {
  console.log(triangleCreation);
  triangleCreation = triangleCreation + "#";
}