function save(){ 
    console.log("Save called");
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    if(users == null) {
        users =[];

    }

    var user=JSON.stringify({
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        sex:document.getElementById("sex").value,
        email:document.getElementById("email").value,
        birthdate:document.getElementById("birthdate").value,
        course:document.getElementById("course").value,
        address:document.getElementById("address").value

    })
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

}