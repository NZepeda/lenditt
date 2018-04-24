function emailFormButtonPressed(){
    var userEmail = $('#userEmail').val();
    
    if(userEmail !== ""){

        if(!inputIsValidEmail(userEmail)){
            $.Zebra_Dialog('Please enter a valid email address', {
                type: 'error',
                title: 'Oops!'
            });   
        }
        else{
            $.ajax({
                type: "GET",
                url: "http://"+ window.location.hostname + "/saveEmail?email=" + userEmail,
                success: function(response){
                    $.Zebra_Dialog('<strong>Thanks!</strong>, we\'ll send you updates and let you know when you can start using Lenditt!', {
                        type: 'confirmation',
                        title: 'Thank You!'
                    });

                    // Set the field to blank
                    $('#userEmail').val("");
                },
                error: function(error){
                        $.Zebra_Dialog('Looks like you\'ve already signed up! We\'ll keep you updated with any news.', {
                            type: 'error',
                            title: 'Oops!'
                        });
                }
            });
        }
        
    }
}

function inputIsValidEmail(input){
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 return re.test(input);
}