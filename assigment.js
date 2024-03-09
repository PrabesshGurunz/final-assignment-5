function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var dateofBirth = document.getElementById("dob").value;
    var phoneNumber = document.getElementById("ph-number").value;
   var gpa = document.getElementById("gpa").value;
   var province = document.getElementById("province").value;
   var cityName = document.getElementById("city-name").value;
   var previousSchool = document.getElementById("pre-school").value;
    var courses = document.getElementById("courses").value;

    var table = document.getElementById("dataTable");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);


    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = age;
    cell4.innerHTML = dateofBirth;
    cell5.innerHTML = phoneNumber;
    cell6.innerHTML = gpa;
    cell7.innerHTML = province;
    cell8.innerHTML = cityName;
   cell9.innerHTML = previousSchool;
    cell10.innerHTML = courses;

    document.getElementById("myForm").reset();
}