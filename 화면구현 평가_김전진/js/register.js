
let email = document.querySelector(".email")
        let passwd = document.querySelector(".passwd")
        let btn = document.querySelector(".btn")

        document.querySelector(".btn").addEventListener('click', function frmCheck(e){ e.preventDefault();
            if(email.value == ""){
                alert("이메일을 입력하세요.");
                email.focus();
                return false;
            }
            if(passwd.value == ""){
                alert("비밀번호를 입력하세요.");
                passwd.focus();
                return false;
            }
            
    });