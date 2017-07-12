function emailFormButtonPressed(){
        var userEmail = $('#userEmail').val();

        if(userEmail !== ""){
            // $.get("http://"+window.location.hostname +"/saveEmail?email=" +userEmail, function(data, status){
            //     // console.log(data);
            //     //
            //      console.log(status);
            // });

            $.ajax({
                type: "GET",
                url: "http://"+ window.location.hostname + "/saveEmail?email=" + userEmail,
                success: function(response){
                    $.Zebra_Dialog('<strong>Thanks!</strong>, we\'ll send you updates and let you know when you can start using Lenditt!', {
                        type: 'confirmation',
                        title: 'Thank You!'
                    });
                },
                error: function(error){
                     $.Zebra_Dialog('Looks like you\'ve already signed up! We\'ll keep you updated with any news.', {
                        type: 'error',
                        title: 'Oops!'
                    });
                }
            })
        }
}