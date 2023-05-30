//본인인증 팝업 열기, 닫기
popOpen(".identityPop", ".identityPop_bg", ".identityPop_open")
popClose(".identityPop", ".identityPop_bg", ".identityPop_close")

//본인인증 팝업에서 휴대폰 인증 이메일 인증 단순 변경
$(document).on("click", ".identity_auth > li", function(){
  if(!$(this).hasClass("active")){
    var this_index = $(this).index();
    $(".identity_auth > li").removeClass("active");
    $(this).addClass("active");
    
    $(".identity_cont-wrap > .identity_cont").removeClass("active");
    $(".identity_cont-wrap > .identity_cont").eq(this_index).addClass("active");
  }
});

//전화번호 체크
function telCheck( tel ){
  var regex=/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  return (tel != "" && tel != "undefined" && regex.test(tel)); 
}

//이메일 체크
function emailCheck( email ) { 
  var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
  return (email != "" && email != "undefined" && regex.test(email)); 
}


//에러메시지
function errorMessage( input, message ){    
  $(input).parent().find('.error_msg').text(message);
}

// 전화번호 자동 하이픈
$(document).on("keyup", ".only_tel", function() { 
  $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") ); 
});

//인증 코드 전송 클릭 시
var timer = null;
var isRunning = false;

//인증 코드 카운트 시작 
function startTimer(count, time, codeId) {  
  var minutes, seconds;
  timer = setInterval(function () {
  minutes = parseInt(count / 60, 10);
  seconds = parseInt(count % 60, 10);
  
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  time.html(minutes + " : " + seconds);

  if (--count < 0) {
    clearInterval(timer);
    alert("인증 시간이 초과 되었습니다.");
    time.html("00 : 00");
    isRunning = false;
    $(codeId).removeClass('is-invalid').addClass('disabled').attr('disabled', true);
  }
  }, 1000);
  isRunning = true;
}

//인증코드 받기 클릭 시
$(document).on("click", ".code_send", function(){
  if($(this).hasClass("code_send_tel")){
    //휴대폰 인증
    var authTel = "input[id='auth_tel']";
    var codeId = "input[id='auth_tel_code']";
    
    if($(authTel).val().trim() == ''){
      errorMessage(authTel, "휴대폰 번호를 입력해 주세요.");
      $(authTel).val('').addClass('is-invalid').focus();
      return false;
    }else if ( !telCheck($(authTel).val().trim()) ) { 
      errorMessage(authTel, "전화번호 형식이 올바르지 않습니다.");
      $(authTel).val('').addClass('is-invalid').focus();
      return false; 
    }else{
      $(authTel).removeClass('is-invalid');
    }

    $(".identity_cont .authAfter-button").hide();
    $(".identity_cont.active .authAfter-button").show();

    //시간 연장
    var time = $(".code-time .time");
    var leftSec = 180;
    if (isRunning){
      clearInterval(timer);
      time.html("00 : "+leftSec+"");
      startTimer(leftSec, time, codeId);
    }else{
      startTimer(leftSec, time, codeId);
    }


  }else if($(this).hasClass("code_send_email")){
    //이메일 인증
    var authEmail = "input[id='auth_email']";
    var codeId = "input[id='auth_email_code']";
    
    if($(authEmail).val().trim() == ''){
      errorMessage(authEmail, "이메일 주소를 입력해주세요.");
      $(authEmail).val('').addClass('is-invalid').focus();
      return false;
    }else if( !emailCheck($(authEmail).val().trim()) ) { 
      errorMessage(authEmail, "이메일 형식이 올바르지 않습니다.");
      $(authEmail).addClass('is-invalid').focus();
      return false; 
    }else{
      $(authEmail).removeClass('is-invalid');
    }

    $(".identity_cont .authAfter-button").hide();
    $(".identity_cont.active .authAfter-button").show();

    //시간 연장
    var time = $(".code-time .time");
    var leftSec = 180;
    if (isRunning){
      clearInterval(timer);
      time.html("00 : "+leftSec+"");
      startTimer(leftSec, time, codeId);
    }else{
      startTimer(leftSec, time, codeId);
    }
  }
});   

$(document).on("click", ".identityPop .identity_cont.active .code_confirm", function(e){
  e.preventDefault();
  
  var codeID = ".identity_cont.active input.code-input";
  if($(codeID).hasClass('disabled')){
    errorMessage(codeID, "인증코드를 입력해주세요.");
    return false;
  }
  
  if($(codeID).val().trim() == ''){
    errorMessage(codeID, "인증코드를 입력해주세요.");
    $(codeID).val('').addClass('is-invalid').focus();
    return false;
  }else{
    $(codeID).removeClass('is-invalid');
    clearInterval(timer);

    $(".identityPop").removeClass("active");
    $(".identityPop_bg").removeClass("active");

    //휴면해제 완료 팝업 열기
    $(".identityConfirmPop").addClass("active");
    $(".identityConfirmPop_bg").addClass("active");    
  }  
});