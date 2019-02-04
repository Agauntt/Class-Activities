  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAimBMN8NtZeNDY75kZGMLjQwcY6Ta2aMQ",
    authDomain: "employee-payroll-14712.firebaseapp.com",
    databaseURL: "https://employee-payroll-14712.firebaseio.com",
    projectId: "employee-payroll-14712",
    storageBucket: "employee-payroll-14712.appspot.com",
    messagingSenderId: "801406253008"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#submit").click(function(){
    event.preventDefault();

  var newName = $("#add-employee").val().trim();
  var newRole = $("#new-role").val().trim();
  var newDate = $("#new-startDate").val().trim();
  var newMonthlyRate = $("#new-rate").val().trim();

console.log(newName);
console.log(newRole);
console.log(newDate);
console.log(newMonthlyRate);

    database.ref('newEmployee').set({
        name: newName,
        Role: newRole,
        Start: newDate,
        rate: newMonthlyRate
    })
  })