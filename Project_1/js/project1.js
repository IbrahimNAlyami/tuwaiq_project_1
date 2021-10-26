
$(document).ready(function () {
    $("#path-button").on("click", function () {
        $("#about-course").hide();
        $("#homePage").hide();
        $("#course-path").hide();
        $("#login-page").show();

    });
});

$(document).ready(function () {
    $("#login").on("click", function () {
        $("#about-course").hide();
        $("#homePage").hide();
        $("#course-path").hide();
        $("#login-page").show();
    });
});

$("#signup-button").on("click", function () {
    $("#signup").show();
    $("#login-page").hide();
});



/* local storage signup*/
$('#signup-btn').click(function(){
    let email = $('#email_signup').val();
    let password = $('#password_signup').val();
    let re_password = $('#repassword_signup').val();

    if (email !== "" && password !== "" && re_password !== ""){
        const signup_users = {
            email_user: email,
            password_user: password,
            repassword_user: re_password
        };

        const list_of_users = JSON.parse(localStorage.getItem('Data'));

        if (list_of_users !== null) {
            list_of_users.push(signup_users);
            localStorage.setItem('Data', JSON.stringify(list_of_users));
        }
        else{
            let new_users = [];
            new_users.push(signup_users)
            localStorage.setItem('Data', JSON.stringify(new_users));
        }
        $('#signup').css("display", "none");
        $('#login-page').css("display", "block");
    }
    else{
        // $('#signup.alert-warning').css('display', 'block');
        alert("Hello");
    }
});

// sign in 
$("#signin").click(function(){
    let email = $("#email_login_input").val();
    let password = $("#password_login_input").val();

    if (email === "asc" && password === "asva"){
        $("#homePage").hide();
        $("#about-course").hide();
        $("#course-path").hide();
        $("#login-page").hide();
        $("#videosPage").show();
    }
    else if (email === "ibrahem@gmail.com" && password === "1234"){
        $("#homePage").hide();
        $("#about-course").hide();
        $("#course-path").hide();
        $("#login-page").hide();
        $("#videosPage").show();
    } 
    else{
        alert("Wrong data or password!");
    }
    
});
/*
$("#signin").click(function(){
    let email = $("#email_login_input").val();
    let password = $("#password_login_input").val();

    if (email === signup_users.email_user && password === signup_users.password_user){
        $("#homePage").hide();
        $("#about-course").hide();
        $("#login-page").hide();
        $("#videosPage").show();
    }

    else{
        alert("Wrong data or password!");
    }
    
});
*/
// viseos playlist
$(document).ready(function(){
    $("button").click(function(){
      $("ul li:first").hide();
    });
  });