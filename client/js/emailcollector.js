function emailFormButtonPressed(){
        var userEmail = $('#userEmail').val();

        if(userEmail !== ""){
            $.get("http://"+window.location.hostname +"/saveEmail?email=" +userEmail, function(data, status){
                // console.log(data);
                // console.log(status);
            });
        }
}