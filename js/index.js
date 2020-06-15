$(function() {

    let member ={
        userId: "admin",
        userPwd: "admin",
        userName: "관리자",
        userSsn1: "900909",
        userSsn2: "1",
        userEmail: "admin@google.com",
        userTel1: "010",
        userTel2: "1111",
        userTel3: "2222",
        gender: "m",
        birth: "1990/09/09"
    }

    let memberStr = JSON.parse(localStorage.getItem("member"));
        console.log(memberStr);
        if(memberStr == null) {
            memberStr=[];
            memberStr.push(member); 
        }
        // console.log(memberStr);

        localStorage.setItem("member", JSON.stringify(memberStr));

    let loginMember = JSON.parse(localStorage.getItem("memberId"));
    console.log(loginMember);

    $(loginMember).each(function(i, entry){
        if(entry.userId != ''){
            let html = "<li>"+ entry.userId +"님" +"</li>";
            $("#login-member ul").append(html);
            $("#login").css("display","none");
            $("#login-member").css("display","block");
        }
    });

    $("#login-btn").click(function (){
        let $userId = $("#user-id").val();
        let $userPwd = $("#password").val();

        let allMember = JSON.parse(localStorage.getItem("member"));

        let cnt=0;
        $(allMember).each(function(i, entry){
            if($userId == entry.userId && $userPwd==entry.userPwd) {
                cnt++;
                let html = "<li>"+ $userId +"님" +"</li>";
                $("#login-member ul").append(html);
                $("#login").css("display","none");
                $("#login-member").css("display","block");

                let memberId = {
                    userId: $("#user-id").val()
                }

                let loginMember = JSON.parse(localStorage.getItem("memberId"));
                
                if(loginMember == null) 
                loginMember=[];
                loginMember.push(memberId);
                console.log(loginMember);

                localStorage.setItem("memberId", JSON.stringify(loginMember));
            }
        });
        if(cnt == 0) {
            alert("아이디 또는 비번이 틀렸습니다.")
            $("#user-id").val("");
            $("#password").val("");
        }
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