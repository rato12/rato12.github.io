$(function () {
    $("#conform").click(function(){
        // let id = $("#userId").val();
        let member = {
            userId: $("#userId").val(),
            userPwd: $("#password").val(),
            userName: $("#uerName").val(),
            userSsn1: $("#ssn1").val(),
            userSsn2: $("#ssn2").val(),
            userEmail: $("#email").val(),
            userTel1: $("#tel1").val(),
            userTel2: $("#tel2").val(),
            userTel3: $("#tel3").val(),
            gender:$("[name=gender]:checked").val(),
            birth: $("#birthday").val()
        }
        console.log(member);
        let memberStr = JSON.parse(localStorage.getItem("member"));
        
        if(memberStr == null) 
            memberStr=[];
        memberStr.push(member);
        // console.log(memberStr);

        localStorage.setItem("member", JSON.stringify(memberStr));
        
    });
});

function validate() {
    
    let idVal = userId.value;
    let pwdVal = password.value;
    let rePwdVal = repassword.value;
    let nameVal = uerName.value;
    let ssnVal1 = ssn1.value;
    let ssnVal2 = ssn2.value;
    let emailVal = email.value;

    let telVal1 = tel1.value;
    let telVal2 = tel2.value;
    let telVal3 = tel3.value;

    //아이디 유효성검사
    let regid1 = /^[a-z][a-z\d]{4,12}$/;
    let regid2 = /[0-9]/;
    if(!(regid1.test(idVal)==true && regid2.test(idVal)==true)) {
        alert("아이디 조건을 확인해주세요");
        return false;
    }

    //password 유효성검사
    let regpwd1 = /^.{8,15}$/;
    let regpwd2 = /\d/;
    let regpwd3 = /[a-zA-Z]/;
    let regpwd4 = /[\*!&]/;

    if(!(regpwd1.test(pwdVal)==true && regpwd2.test(pwdVal)==true
        && regpwd3.test(pwdVal)==true && regpwd4.test(pwdVal)==true)) {
        alert("비밀번호 조건(영문,숫자,특수문자 8~15자이내)을 확인해주세요");
        return false;
    }

    if(!(pwdVal === rePwdVal)){
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    //이름 유효성검사
    let regname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    if(!(regname.test(nameVal)==true)) {
        alert("이름은 한글 2글자 이상 입력해주세요.");
        return false;
    }

    //주민번호 유효성검사
    let regssn1 = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[01])$/;
    let regssn2 = /^[1-4]{1}$/;
    if(!(regssn1.test(ssnVal1)==true && regssn2.test(ssnVal2)==true)) {
        alert("주민번호를 확인해주세요");
        return false;
    }

    //이메일 유효성검사
    // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
    // 1글자 이상(주소). 글자 가 1~3번 반복됨
    let regemail = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;

    if(!(regemail.test(emailVal)==true)) {
        alert("이메일 조건을 확인해주세요");
        return false;
    }

    //휴대폰 유효성검사
    let regtel2 = /^[0-9]{3,4}$/;
    let regtel3 = /^[0-9]{4}$/;

    if(!(regtel2.test(telVal2)==true && regtel3.test(telVal3)==true)) {
        alert("휴대폰번호는 3~4자리 입력필요");
        return false;
    }
    
    return true;
}