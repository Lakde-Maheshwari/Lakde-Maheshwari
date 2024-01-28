const Account_Id = 144553;
let AccountEmail = "maheshwarilakde@gmail.com"
var AccountPassword = "12345"
AccountCity = "Jaipur";
let AccountHandlerName = "Lakde Maheshwari";
console.log(Account_Id);
AccountEmail = "maheshlakde@gmail.com";
console.table([Account_Id,AccountEmail,AccountHandlerName,AccountPassword,AccountCity])

// prefer not to use var because of issue in block scope and functional scope