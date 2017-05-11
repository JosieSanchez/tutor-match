//Subject scroll down menu: when subject is clicked it will display the tutors based on the subject chosen.  That will ask the computer to retrieve data from the data base.  The database will display the available tutors for that subject from the tutormatch db.//
function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("subject").innerHTML = "We are searching for a tutor in: " + x;

//Use ajax to make a get request "/api/tutors/:subject"

$.ajax({
url: "/api/tutors/" + x, // The x is the subject
method:"GET",
dataType: "json", // This is how data will be returned (as an object format) (get or post)

//SUCCESS: means we are sending request to server, your request is identified valid or an err by server sending  back a  message
success: function(data, textStatus, xhr) {
  //var x = document.getElementById (depending how it returns the data) from that pull whatever data you want
//     if(xhr.status==200)
//         // alert('successful');
//     $('#email-input').val('');
//     $('#myModal').modal('show'); // Add this and it will open the modal 
console.log(data);
}
});

}


//Thank you for choosing us to help you!  Your remote session is confirmed with Tutor Name:, Date, Time and Tutor Email.  SEE you then!




