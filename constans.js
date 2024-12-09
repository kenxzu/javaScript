export const API = "https://api.example.com";

export const colorThemeDrk = {
  backgroundColor: "#000",
  textColor: "#EEE",
  headerColor: "#FF0000",
  footerColor: "#FF0000",
};
export const colorThemeLght = {
  backgroundColor: "#fff",
  textColor: "#333",
  headerColor: "#FF0000",
  footerColor: "#FF0000",
};
export const labels = {
  english: {
    supportLink: "Get Support",
    contactLink: "Contact Us",
  },
};

//the code above is the example of named export
// another way we can export that preface each constant and just like this.

//export {API, colorThemeDrk, colorThemeLght, labels};

// Export statements containing all the modules you want to export from a file are typically placed at the end of the file

//DEFAULT Export-Default exports specify a single function or class from a file.//
// export default function addOne(input){ return input + 1;
// }
//by default it part of the file itselt
//no associated name

// oregonInfo.js
// export const stateName = 'Oregon'; 
// export const capitalCity = 'Salem'; 
//export const stateBird = 'Western meadowlark';
// export default function getStateInfo(){
    // return {stateName, capitalCity, stateBird};
// }


//we can also do this export default getStateInfo;


//--Importing Modules ---//
// import {moduleName, other_module} from 'file path';