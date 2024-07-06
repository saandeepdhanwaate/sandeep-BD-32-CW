const express = require("express");
const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["Rahul", "Sita", "Amit", "Vikram", "Priya"];
let employees = [
  { employeeId: 1, name: "Rahul" },
  { employeeId: 2, name: "Sita" },
  { employeeId: 3, name: "Amit" },
];

let contacts = [
  { phoneNumber: "1234567890", name: "Rahul", address: "123 Street, City" },
  { phoneNumber: "0987654321", name: "Sita", address: "456 Avenue, City" },
  { phoneNumber: "1112223334", name: "Amit", address: "789 Boulevard, City" },
];

//numbers/find

function findNumber(ele, num) {
  return ele === num;
}

app.get("/numbers/find/:number", (req, res) => {
  let num = parseInt(req.params.number);
  let result = numbers.find((ele) => findNumber(ele, num));
  res.json(result);
});

// names/find/:name
function findName(ele, name) {
  return ele === name;
}
app.get("/names/find/:name", (req, res) => {
  let name = req.params.name;
  let result = names.find((ele) => findName(ele, name));
  res.json(result);
});

// employees/find/:id
function findEmployeeId(ele, id) {
  return ele.employeeId === id;
}
app.get("/employees/find/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let result = employees.find((ele) => findEmployeeId(ele, id));
  res.json(result);
});


// contacts/find/:phoneNumber
function findContactNumber(ele, phoneNumber){
  return ele.phoneNumber === phoneNumber
}
app.get('/contacts/find/:phoneNumber',(req,res)=>{
  let phoneNumber = req.params.phoneNumber;
  let result = contacts.find((ele)=> findContactNumber(ele, phoneNumber))
  res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
