// what you will learn in js
$(document).ready(function () {
    $("#learn-button").click(function () {
        $("#fade1").fadeIn(3000);
        $("#fade2").fadeIn("slow");
        $("#fade3").fadeIn("slow");

    });
});
/*## end of what you'll learn in js ##*/


/* About course */
$(document).ready(function () {
    $("#about-button").click(function () {
        $("#fade4").fadeIn(3000);
    });
});
/*## end of about course ##*/

/* course path */
$(document).ready(function () {
    $("#path-button").on("click", function () {
        $("#about-course").hide();
        $("#homePage").hide();
        $("#course-path").hide();
        $("#login-page").show();

    });
});
/* ## end of course path ## */


/* login button in the nav bar */
$(document).ready(function () {
    $("#login").on("click", function () {
        $("#about-course").hide();
        $("#homePage").hide();
        $("#course-path").hide();
        $("#login-page").show();
    });
});
/* login button in the nav bar ## */

/* signup button */
$("#signup-button").on("click", function () {
    $("#signup").show();
    $("#login-page").hide();
});
/* ## end of signup button ## */



/* local storage signup*/
$('#signup-btn').click(function () {
    let email = $('#email_signup').val();
    let password = $('#password_signup').val();
    let re_password = $('#repassword_signup').val();

    if (email !== "" && password !== "" && re_password !== "") {
        const signup_users = {
            email_user: email,
            password_user: password,
            repassword_user: re_password
        };

        const list_of_users = JSON.parse(localStorage.getItem('Data'));

        if (list_of_users !== null) {
            list_of_users.push(signup_users);
            localStorage.setItem('Data', JSON.stringify(list_of_users));
        } else  {
            let new_users = [];
            new_users.push(signup_users)
            localStorage.setItem('Data', JSON.stringify(new_users));
        }
        $('#login-page').show();

    } else {
        $('#login-form2').show();
    }
});
/* ## end of local storage signup ##*/



/*  local storage signin */
$('#signin').click(function () {
            let email_input = $('#email_login_input').val();
            let pass_input = $('#password_login_input').val();

            const list_users = JSON.parse(localStorage.getItem('Data'));

            if (email_input !== "" && pass_input !== "") {
                list_users.forEach(function (admin) {
                    if (email_input === admin.email_user && pass_input === admin.password_user) {
                        $("#login-page").hide();
                        $("#about-course").show();
                        $("#homePage").show();
                        $("#course-path").hide();
                        $("#videosPage").show();
                        $("#signup").hide();
                    } else {
                        $('#login-form2').show();
                    }
                });
            }
        });
/* ## end of local storage signin ## */


            // list videos display
            // video 1
            $("#vid1").click(function () {
                $("#tv").append('<iframe id="fr1" class="center" width="100%" height="500px"src="https://www.youtube.com/embed/S-MGBBtI-48" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 2
            $("#vid2").click(function () {
                $("#tv").append('<iframe id="fr2" class="center" height="500px" width="100%"src="https://www.youtube.com/embed/vPwQKAZryP8"src="https://www.youtube.com/embed/2pz2JlJUDMg" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
                
            });
            // video 3
            $("#vid3").click(function () {
                $("#tv").append('<iframe id="fr3" class="center" height="500" width="100%"src="https://www.youtube.com/embed/2pz2JlJUDMg" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 4
            $("#vid4").click(function () {
                $("#tv").append('<iframe id="fr4" class="center" height="500" width="100%"src="https://www.youtube.com/embed/hQWcdh2GdEU" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 5
            $("#vid5").click(function () {
                $("#tv").append('<iframe id="fr5" class="center" height="500" width="100%"src="https://www.youtube.com/embed/DZTgVQhgJYM" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 6
            $("#vid6").click(function () {
                $("#tv").append('<iframe id="fr6" class="center" height="500" width="100%"src="https://www.youtube.com/embed/acWPO_iQ--c" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 7
            $("#vid7").click(function () {
                $("#tv").append(' <iframe id="fr7" class="center" height="500" width="100%"src="https://www.youtube.com/embed/cFjj7wW6wro" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 8
            $("#vid8").click(function () {
                $("#tv").append('<iframe id="fr8" class="center" height="500" width="100%"src="https://www.youtube.com/embed/LYCGqVF5nFA" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr9").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });
            // video 9
            $("#vid9").click(function () {
                $("#tv").append('<iframe id="fr9" class="center" height="500" width="100%"src="https://www.youtube.com/embed/gqDT45XqWq4" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr10").hide();
                $("#play-video").hide();
            });

            // video 10
            $("#vid10").click(function () {
                $("#tv").append('<iframe id="fr10" class="center" height="500" width="100%"src="https://www.youtube.com/embed/ciNxZcOJ55k" title="YouTube video player"frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');

                $("#fr1").hide();
                $("#fr2").hide();
                $("#fr3").hide();
                $("#fr4").hide();
                $("#fr5").hide();
                $("#fr6").hide();
                $("#fr7").hide();
                $("#fr8").hide();
                $("#fr9").hide();
                $("#play-video").hide();
            });
            // ## end of list videos ## 
