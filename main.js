var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter >4){
        counter = 1;
    }
}, 5000);

function login(){
    /* 로그인 폼 - 아이디 혹은 비밀번호를 입력 안했을 경우 */
    var loginForm= document.loginForm;
    var id = loginForm.id.value;
    var pw = loginForm.pw.value;

    if(!id && !pw){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return false;
    }
    else if(!id){
        alert("아이디를 입력해주세요");
        return false;
    }
    else if(!pw){
        alert("비밀번호를 입력해주세요");
        return false;
    }
    else{
        return true;
    }
}
