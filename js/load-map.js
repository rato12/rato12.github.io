$(function() {
    //image 클릭시 h2, p 태그 투명->보이게 하기
    $(".map>img").click(function(){
        $(".map div").fadeTo(1000,1)
    });

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