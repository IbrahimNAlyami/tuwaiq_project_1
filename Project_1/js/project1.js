/*$("#signin").click(function(){
    let email = $("#email").val();
    let password = $("#passwordd").val();

    if (email === "ibrahim" && password === "1212"){
        open("project1.html");
    }
    else{
        alert("Wrong data or password!");
    }
});
*/


    $(document).ready(function(){
        $("#path-button").on("click", function(){
        $("#about-course").hide();
        $("#homePage").hide();
        $("#course-path").hide();
        $("#videosPage").show();

        });
      });