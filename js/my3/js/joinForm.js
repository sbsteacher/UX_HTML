const $frm = document.querySelector('#frm');
$frm.addEventListener('submit', chk);

// $frm.onsubmit = function() {
//     return false;
// }

function emptyValChk(ele, name) {
    if(!ele.value) {
        alert(`${name}을(를) 입력해주세요.`);
        ele.focus();
        return true;
    }
    return false;
}

function chk(e) {
    if( emptyValChk($frm.uid, '아이디')  
        ||  emptyValChk($frm.upw, '비밀번호') 
        ||  emptyValChk($frm.email, '이메일') 
        ||  emptyValChk($frm.state_msg, '상태메시지') 
    ) {
        //return false;
        e.preventDefault();
        return;
        
    }
    if($frm.upw.value !== $frm.re_upw.value) {
        alert('비밀번호를 확인해주세요.');
        //return false;
        e.preventDefault();
        return;
    }

    const pwReg = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    if(!pwReg.test($frm.upw.value)) {
        alert('비밀번호는 문자,숫자,특수문자 포함한 8자리 이상이어야 합니다.');
        //return false;
        $frm.upw.focus();
        e.preventDefault();
        return;
    }

    const emailReg = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailReg.test($frm.email.value)) {
        alert('이메일을 확인해 주세요.');
        //return false;
        $frm.email.focus();
        e.preventDefault();
        return;
    }   
}

/*
function chk() {        
    if(!$frm.uid.value) {
        alert('uid를 입력해주세요.');
        return false;
    }
    if(!$frm.upw.value) {
        alert('upw를 입력해주세요.');
        return false;
    }
    if($frm.upw.value !== $frm.re_upw.value) {
        alert('비밀번호를 확인해주세요.');
        return false;
    }
    if(!$frm.email.value) {
        alert('이메일을 입력해주세요.');
        return false;
    }

    //비밀번호, 확인비밀번호 값이 같은지 확인
    //다르면
    // alert "비밀번호를 확인해주세요." 띄우고
    // return false;

    return true;    
}
*/