const accountId =144553  //unchanged variable (static)
let accountEmail ="Veerendra@google.com"

/*
Prefer not to use var -
  because of issue in block scope and functional scope
*/
var accountPass ="12345"
accountCity ="Bhopal" //also initialize variable like this
let accountState;  //undefined variable

// accountId =2  // not allowed
// console.log(accountId);

accountEmail ="hdf@bank.com"
accountPass ="4y74y7"
accountCity ="bengaluru"
console.table([accountId ,accountEmail ,accountPass ,accountCity ,accountState])

