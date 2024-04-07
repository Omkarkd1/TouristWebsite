$(document).ready(function(){
    var flag=0  // If flag is 0 enable submit else disable
    var namepattern=/(^['A-Za-z']{1,25})$/                                  
    // First Name Validation starts here
    $("#fname").change(function(){
        let fname=$("#fname").val();
        if(fname.match(namepattern))
        {
            $("#fnameError").html("");
        }
        else 
        {
            flag=1
            $("#fnameError").html("* Please enter valid first Name").css("color","red");
        }
    })
    // First Name Validation ends here

    // Last Name Validation starts here
    $("#lname").change(function(){
        let lname=$("#lname").val();
        if(lname.match(namepattern))
        {
            $("#lnameError").html("");
        }
        else 
        {
            $("#lnameError").html("* Please enter valid last Name").css("color","red");
        }
    })
    // Last Name Validation ends here

    // Mobile Number Validation starts here
    $("#mno").change(function(){
        var mno=$("#mno").val();
        let mnopattern=/(^[6-9]{1}[0-9]{9})$/
        if(mno.match(mnopattern))
        {
            $("#mnoError").html("");
        }
        else 
        {
            $("#mnoError").html("* Please enter valid Mobile number").css("color","red");
        }
    })
    // Mobile Number Validation ends here

    // Email id Validation starts here
    $("#eid").change(function(){
        var eid=$("#eid").val();
        let eidpattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(eid.match(eidpattern))
        {
            $("#eidError").html("");
        }
        else 
        {
            $("#eidError").html("* Please enter valid Emaid Id").css("color","red");
        }
    })
    // Email id Validation ends here
    

    // Addhar No Validation starts here
    $("#addrNo").change(function(){
        var addr=$("#addrNo").val();
        let addrNopattern= /^(['4-9']['0-9']{11})$/
        if(addr.match(addrNopattern))
        {
            $("#addrNoError").html("");
        }
        else 
        {
            $("#addrNoError").html("* Please enter valid Addhar number").css("color","red");
        }
    })
    // Addhar No Validation ends here

    // Hotel validation starts here
    $("#hotel").change(function(){
        let hotel=$("#hotel").val();
        if(hotel=="")
        {
            $("#hotelError").html("* Please select hotel").css("color","red");
        }
        else
        {
            $("#hotelError").html("");
        }
    })
    // Hotel validation ends here
    
    // Start Date validation starts here
    var currentDate = new Date();
    $("#sdate").datepicker({
        minDate: currentDate
    })
    // Start Date validation ends here

    // Last Date validation starts here
    var currentDate = new Date();
    $("#ldate").datepicker({
        minDate: currentDate
    })
    // Last Date validation ends here
});

// Room Validation starts here
function validate()
{
    flag=0
    let room1=document.getElementsByName("room")[0];
    let room2=document.getElementsByName("room")[1];
    let room3=document.getElementsByName("room")[2];

    if(room1.checked==false && room2.checked==false && room3.checked==false)
    {
        flag=1
        $("#roomError").html("* Please select ").css("color","red");
    }
    else
    {
        document.getElementById("roomError").innerHTML=""
    }
    if (flag==1)
        return false
    return true
}
// Room validation ends here
