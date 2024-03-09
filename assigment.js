function submitForm() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    
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
    


    cell1.innerHTML = name;
    cell2.innerHTML = lname;
    
    cell3.innerHTML = dateofBirth;
    cell4.innerHTML = phoneNumber;
    cell5.innerHTML = gpa;
    cell6.innerHTML = province;
    cell7.innerHTML = cityName;
   cell8.innerHTML = previousSchool;
    cell9.innerHTML = courses;

    document.getElementById("myForm").reset();
}
