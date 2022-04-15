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

for (let triangleCreate = "#"; triangleCreate.length <= 8; triangleCreate += "#") {
  console.log(triangleCreate);
}