export const stateName = "Oregon";
export const capitalCity = "Salem";
export const stateBird = "Western meadowlark";
export default function getStateInfo() {
  return { stateName, capitalCity, stateBird };
}

function addOne(input){
  return input;
}
//or we can do this in defaulf function 
// export default getStateInfo; with this we just declare the function without the export default in the preceeding 

//here we can rename the exported member
 export {addOne as sum}