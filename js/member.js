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

    //image 클릭시 h2, p 태그 투명->보이게 하기
    $(".map>img").click(function(){
        $(".map div").fadeTo(1000,1)
    });

    $("#allSearch").click(function() {
        let header="<tr><th>ID</th><th>비밀번호</th><th>이름</th><th>주민번호</th><th>이메일</th><th>휴대폰</th><th>성별</th><th>생일</th></tr>";
        $("#tbl-member").html(header);
        let allMember = JSON.parse(localStorage.getItem("member"));

        $(allMember).each(function(i, entry){
        let html = "<tr>"
                 + "<td>"+ entry.userId +"</td>"
                 + "<td>"+ entry.userPwd +"</td>"
                 + "<td>"+ entry.userName +"</td>"
                 + "<td>"+ entry.userSsn1+"-"+entry.userSsn2+"******" +"</td>"
                 + "<td>"+ entry.userEmail +"</td>"
                 + "<td>"+ entry.userTel1+"-"+entry.userTel2+"-"+entry.userTel3 +"</td>"
                 + "<td>"+ entry.gender +"</td>"
                 + "<td>"+ entry.birth +"</td>"
                 + "</tr>";
        $("#tbl-member").append(html);
        });
    });

    $("#search").click(function() {
        let id = $("#keyName").val();
        let header="<tr><th>ID</th><th>비밀번호</th><th>이름</th><th>주민번호</th><th>이메일</th><th>휴대폰</th><th>성별</th><th>생일</th></tr>";
        $("#tbl-member").html(header);
        let allMember = JSON.parse(localStorage.getItem("member"));

        let cnt=0;
        
        $(allMember).each(function(i, entry){
            if(id == entry.userId) {
                cnt++;
                let html = "<tr>"
                         + "<td>"+ entry.userId +"</td>"
                         + "<td>"+ entry.userPwd +"</td>"
                         + "<td>"+ entry.userName +"</td>"
                         + "<td>"+ entry.userSsn1+"-"+entry.userSsn2+"******" +"</td>"
                         + "<td>"+ entry.userEmail +"</td>"
                         + "<td>"+ entry.userTel1+"-"+entry.userTel2+"-"+entry.userTel3 +"</td>"
                         + "<td>"+ entry.gender +"</td>"
                         + "<td>"+ entry.birth +"</td>"
                         + "</tr>"
                $("#tbl-member").append(html);
            }
        });
        if(cnt == 0) {
            let html1="<tr>"+"<td colspan='8'>"+"조회된 회원이 없습니다."+"</td>" +"</tr>";
            $("#tbl-member").append(html1);
        }
        $("#keyName").val("");
    });

});