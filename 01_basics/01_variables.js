const accountId = 123225;
let accountEmail = "12345"
var accountPassword = "ashuu"
accountCity = "bihar"
let accountState;

// acoountId = 2 not allowed

console.log(accountId);

/*
prefer not use to var because of issue in block scope and functional scope
*/

accountEmail = "3454"
accountPassword = "ashish"
accountCity = "kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
