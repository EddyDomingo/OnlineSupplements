function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openNav2() {
    document.getElementById("mySidenav2").style.width = "250px";
  }
  
  function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
  }

  function openNav3() {
    document.getElementById("mySidenav3").style.width = "250px";
  }
  
  function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0";
  }

// Jquery form 
$("#formButton").click(function(){
    $("#form1").slideToggle();
   })



// user register and display
function funcUser(){
    
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value 
    const email = document.getElementById("email").value
    const form = document.getElementById("form1");
    var text = "";
    var i;
    for (i = 0; i < form.length ;i++) {
        text += form.elements[i].value + "<br>";
      }
    var user = text.replace(/\<br\>/g," ");
    var userSplit = user.split(" ");
    console.log(userSplit[0]);
    console.log(userSplit[1]);
    console.log(userSplit[2]);

    if (typeof(Storage) !== "undefined") {
    // Store
        localStorage.setItem("First Name", userSplit[0]);
        localStorage.setItem("Last Name", userSplit[1]);
        localStorage.setItem("Email", userSplit[2]);

        document.getElementById("userRegistered").innerHTML = localStorage.getItem("First Name") + " is logged in ";

        
       } else {
         document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
       }
   
    
}