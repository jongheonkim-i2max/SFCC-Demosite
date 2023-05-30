//비밀번호 변경 팝업 열기, 닫기
popOpen(".passwordResetPop", ".passwordResetPop_bg", ".passwordResetPop_open");
popClose(".passwordResetPop", ".passwordResetPop_bg", ".passwordResetPop_close");

//비밀번호 체크
function passwordCheck(password) {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,20}$/;
  return password != "" && password != "undefined" && regex.test(password);
}

//에러메시지
function errorMessage(input, message) {
  $(input).parent().find(".error_msg").text(message);
}

//아이디(이메일) 및 비밀번호 유효성 검사
function resetPW() {
  var password = "input[id='password']";
  var checkPW = "input[id='password_new']";
  var checkPWConfirm = "input[id='password_new_confirm']";

  if ($(password).val().trim() == "") {
    errorMessage(password, "현재 비밀번호를 입력해 주세요.");
    $(password).addClass("is-invalid").focus();
    return false;
  } else if (!passwordCheck($(password).val().trim())) {
    errorMessage(password, "영+숫자 10자이상 입력해 주세요.");
    $(password).addClass("is-invalid").focus();
    return false;
  } else {
    $(password).removeClass("is-invalid");
  }

  if ($(checkPW).val().trim() == "") {
    errorMessage(checkPW, "새 비밀번호를 입력해 주세요.");
    $(checkPW).addClass("is-invalid").focus();
    return false;
  } else if (!passwordCheck($(checkPW).val().trim())) {
    errorMessage(checkPW, "영+숫자 10자이상 입력해 주세요.");
    $(checkPW).addClass("is-invalid").focus();
    return false;
  }
  else if ($(password).val() == $(checkPW).val()){ 
    errorMessage(checkPW, "현재 비밀번호와 동일합니다. 다르게 입력해 주세요.");
    $(checkPW).addClass("is-invalid").focus();
    return false;
  } else {
    $(checkPW).removeClass("is-invalid");
  }

  if ($(checkPWConfirm).val().trim() == "") {
    errorMessage(checkPWConfirm, "새 비밀번호 확인을 입력해 주세요.");
    $(checkPWConfirm).addClass("is-invalid").focus();
    return false;
  } else if ($(checkPWConfirm).val() != $(checkPW).val()) {
    errorMessage(
      checkPWConfirm,
      "비밀번호가 상이합니다. 올바르게 입력해 주세요."
    );
    $(checkPWConfirm).addClass("is-invalid").focus();
    return false;
  } else {
    $(checkPWConfirm).removeClass("is-invalid");
  }
}
