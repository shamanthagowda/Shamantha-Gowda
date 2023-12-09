function Send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("subject").value;
    var mess = document.getElementById("message").value;

//     var body ='<table style="width: 100%;">'+ '<colgroup>'+
//         '<col style="width: 33%; background: hsl(12, 90%, 49%); test_align: center; border-radius: 5px; border-color: white; padding: 0.25% 5px;">'+
//         '<col style="width: 66%; border-color: white; border-radius: 5px; padding: 0.25% 5px;">'+
//     '</colgroup>'+
//     '<tr><td> Name </td><td>'+name+"</td>'</tr>"+
//     "<tr><td> Email </td><td>"+ email+"</td></tr>"+
//     "<tr><td> Subject </td><td>"+sub +"</td></tr>"+
//     "<tr><td> Message </td><td>"+mess+"</td></tr>"+
// "</table>";
       var body='<table style="width: 100%; background-color: aliceblue; border-collapse: collapse;">'+
       '<colgroup>'+
           '<col style="width: 33%;">'+
           '<col style="width: 60%;">'+
       '</colgroup>'+
       '<tr><td style="color: blueviolet; padding: 10px 5px; border: solid black 2px;"> Name </td><td style=" padding: 10px 5px; padding: 10px 5px; border: solid black 2px ;">'+ name +"</td></tr>"+
       '<tr><td style="color: blueviolet; padding: 10px 5px; border: solid black 2px;"> Email </td><td style=" padding: 10px 5px; padding: 10px 5px; border: solid black 2px ;">'+ email +"</td></tr>"+
       '<tr><td style="color: blueviolet; padding: 10px 5px; border: solid black 2px;"> Subject </td><td style=" padding: 10px 5px; padding: 10px 5px; border: solid black 2px ;">'+sub +"</td></tr>"+
       '<tr><td style="color: blueviolet; padding: 10px 5px; border: solid black 2px;"> Message </td><td style=" padding: 10px 5px;padding: 10px 5px; border: solid black 2px ; ">'+ mess +"</td></tr>"+
   '</table>'
    // var body = "Name: " + name+ 
    // "<br/> Email :"+ email +
    // "<br/> Subject :" + sub+
    // "<br/> Message :"+ mess + 
    // "<br/>";

    console.log(body);
  Email.send({
    // proton main secure token
    SecureToken:"187b4bac-c0ba-43ca-a753-445c75e549dc",
    To : 'shamanthagowda02@proton.me',
    From : "lyricathelyricsworld@gmail.com",
    Subject : sub,
    Body : body
}).then(
  message => {
    if (message=="OK"){ alert("Successfully Sent Message!")
      // swal({
      //   title: "Successful",
      //   text: "Your request would be reviewed soon",
      //   icon: "success",
      //   button: "Ok"
      // });
    }
    else{ alert("Failed to send. Please try again.")
      // swal({
      //   title: "Something went wrong",
      //   text: "Try again",
      //   icon: "error",
      //   button: "Ok"
      // });
    }
  });
}
