$(function() {
    $(function() {
        let loginMember = JSON.parse(localStorage.getItem("memberId"));
        console.log(loginMember);

        $(loginMember).each(function(i, entry){
            if(entry.userId != ''){
                let html = "<li>"+ entry.userId +"님" +"</li>";
                $("#login-member ul").append(html);
                $("#login-member").css("display","block");

            }
        });
    });

    $("#logout-btn").click(function() {
        localStorage.removeItem("memberId");
        $("#login").css("display","block");
        $("#login-member").css("display","none");
        $("#user-id").val("");
        $("#password").val("");
        location.href = 'index.html';
    });
});