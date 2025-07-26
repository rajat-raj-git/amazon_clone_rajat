/*const profile= {
fullName:"rajat raj",
isfollow:true,
followers:500,
following:20,

};
*/

//code for sum of 1 
let username = prompt("enter your name");
let symbol = "@";
let size = username.length;
let user_symbol = symbol.concat(username);
let user_id = user_symbol.concat(size);
console.log(user_id);