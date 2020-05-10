

$( document ).ready(function() {
    /*
    console.log( "ready!" );
    console.log("Hello!!");
    alert("I am an alert message");
    */
    var firstname = "Don";
    console.log("Hello " + firstname);
    firstname = "Steve";
    console.log("Hello " + firstname);
    var foods = ["pineapple", "chocolate", "coconut", "kebap"]
    console.log(foods.length);
    for(var i = 0; i < foods.length; i=i+1){
        console.log(foods[i]);
        $('#tastythings').append('<li>' + foods[i] + '</li>');
    }

    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        console.log(data.results[0].name.first);
        $("#person").append('<h1>'+ data.results[0].name.first + ' ' + data.results[0].name.last+'</h1>');
      }
    });
});
/
