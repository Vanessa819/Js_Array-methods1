const addTheWordCool = function(array){
    array.push("cool")
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
//B

const amountOfElementsInArray= function(array){
    
    return array.lenght;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

//C

const selectBelgiumFromBenelux = function (array){
    return array [0];

}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 


//D

const lastElementInArray = function (array){
    return array [3];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 

//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
const newArray = array.slice(1,4);
console.log ("New Array:", "Originele array" );
return newArray;
};

console.log(impeachTrumpSlice(presidents))


const impeachTrumpSplice = function(array) {
    const removedElement = array.splice (0,1);
    console.log("Removed element:" , "Demutated array");
    return array;
}
console.log(impeachTrumpSplice(presidents))

//F

const stringsTogether= function(array){
    

return array.join("");
};
console.log(stringsTogether(['Winc ' , ' Academy ', ' is ', ' leuk ', ';'])) 


//G
 const combineArrays=  function (array1,array2) {
     return ( array1).concat(array2);
 };
 console.log(combineArrays([1,2,3], [4,5,6]));
  