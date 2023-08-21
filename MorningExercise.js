//Write 5 functions in a JS file. 

//Create a github repo for this. 

//Submit github link.

//JS 1. 
const tempInCelsius = (fahrenheit) => {
    let tempInCelsius = 
    ((fahrenheit-32)/1.8)
    console.log(tempInCelsius + "0")
}

tempInCelsius(89); 

//JS 2. 
const convertTime = (mins) => {
  let getHours = (mins/60)
    console.log(getHours);
}
convertTime(350);
convertTime(900);

//JS 3. 
const bestFriend = "Fanny";
const greetUser = (friend) => {
  let modifiedFriend = friend + " Smith"; // Example of modifying friend
  console.log(modifiedFriend);
}

greetUser(bestFriend);

//JS 4. using .toString() to convert the numbers into strings first then .length because the .length can only be used in strings and arrays. 
const socialNumber = 123456789; 
const getNumber = (number) => {
  if (number.toString().length <= 9){    console.log(number)
                      
} else{
  console.log("Wrong Number!")
}
}

getNumber(socialNumber); 

//JS 5. 
const arrayCount = [1, 3, 4, 5, 6, 7];
const countArray = (array) => {
  if (array.toString().length % 2 === 0){
    console.log(array);
  } else{
    console.log("The length of the array is not even.")
  }
}

countArray(arrayCount);