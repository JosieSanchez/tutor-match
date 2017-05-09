//Subject scroll down menu: when subject is clicked it will display the tutors based on the subject chosen.  That will ask the computer to retrieve data from the data base.  The database will display the available tutors for that subject from the tutormatch db.//
function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("subject").innerHTML = "You selected: " + x;
}

//2nd the user will choose the tutor based on radio buttons selection (nothing happens with the radio buttons until the form with the user contact information Submit button is clicked).//

//3rd Once the SUBMIT button is clicked a confirmation modal is opened with the following verbage/information:

$("#conversion_form").on("submit", function(e){
   e.preventDefault();
   var $this = $(this);
   var email = $('#email-input').val();
   $.ajax({
            url: $this.attr('action'), // The name of the file specified in the form
            method:"POST",
            dataType: "json", // La méthode indiquée dans le formulaire (get ou post)
            data: {message: email}, // The method specified in the form (get or post)
            success: function(data, textStatus, xhr) {
                if(xhr.status==200)
                    alert('Thank you for choosing us to help you!  Your remote session is confirmed with Tutor Name:, Date, Time and Tutor Email.  SEE you then!');
                $('#email-input').val('');
                $('#myModal').modal('show'); // Add this and it will open the modal 

            }
        });

});










