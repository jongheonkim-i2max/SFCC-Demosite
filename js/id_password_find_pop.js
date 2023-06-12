//본인인증 팝업 열기, 닫기
popOpen(".IDPWFindPop", ".IDPWFindPop_bg", ".IDPWFindPop_open")
popClose(".IDPWFindPop", ".IDPWFindPop_bg", ".IDPWFindPop_close")

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

//탭클릭시 전환
$(document).on("click", ".lost__tab--ul li", function(){
  if(!$(this).hasClass("active")){
    $(".lost__tab--ul li").removeClass("active");
    $(".lost__tab--content-wrap > div").removeClass("active");

    $(".lost__tab--content-wrap > div").eq($(this).index()).addClass("active");
    $(this).addClass("active"); 

    $(".lost__tab--content .identity_content-wrap > .identity_content").removeClass("active");    
    $(".lost__tab--content .identity_content-wrap > .identity_content:first-child").addClass("active");
    $(".IDPWFindPop .identity_auth > li").removeClass("active");
    $(".IDPWFindPop .identity_auth > li:first-child").addClass("active");
  }
});

//본인인증 팝업에서 휴대폰 인증 이메일 인증 단순 변경
$(document).on("click", ".IDPWFindPop .identity_auth > li", function(){
  if(!$(this).hasClass("active")){
    var this_index = $(this).index();
    $(".IDPWFindPop .identity_auth > li").removeClass("active");
    $(this).addClass("active");    
    
    $(".lost__tab--content.active .identity_content-wrap > .identity_content").removeClass("active");
    $(".lost__tab--content.active .identity_content-wrap > .identity_content").eq(this_index).addClass("active");
  }
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

$(document).on("click", ".code_send", function(){
  const activeCheck = $(".lost__tab--content-wrap > .lost__tab--content.active").index();
  
  if($(this).hasClass("code_send_tel")){
    //휴대폰 인증
    if(activeCheck == 0){
      var codeName = "input[id='id_tel_name']";
      var codeTel = "input[id='id_tel']";
      var codeKey = "input[id='id_code_tel']";
    }else{
      var codeName = "input[id='pw_tel_name']";
      var codeTel = "input[id='pw_tel']";
      var codeKey = "input[id='pw_code_tel']";
    }
    

    if($(codeName).val().trim() == ''){
      errorMessage(codeName, "이름을 입력해 주세요,");
      $(codeName).val('').addClass('is-invalid').focus();
      return false;
    }else{
      $(codeName).removeClass('is-invalid');
    }
    
    if($(codeTel).val().trim() == ''){
      errorMessage(codeTel, "휴대폰 번호를 입력해 주세요.");
      $(codeTel).val('').addClass('is-invalid').focus();
      return false;
    }else if ( !telCheck($(codeTel).val().trim()) ) { 
      errorMessage(codeTel, "휴대폰 형식이 올바르지 않습니다.");
      $(codeTel).val('').addClass('is-invalid').focus();
      return false; 
    }else{
      $(codeTel).removeClass('is-invalid');
    }

  }else{
    //휴대폰 인증
    if(activeCheck == 0){
      var codeName = "input[id='id_email_name']";
      var codeEmail = "input[id='id_email']";
      var codeKey = "input[id='id_code_email']";
    }else{
      var codeName = "input[id='pw_email_name']";
      var codeEmail = "input[id='pw_email']";
      var codeKey = "input[id='pw_code_email']";
    }

    if($(codeName).val().trim() == ''){
      errorMessage(codeName, "이름을 입력해 주세요,");
      $(codeName).val('').addClass('is-invalid').focus();
      return false;
    }else{
      $(codeName).removeClass('is-invalid');
    }
    
    if($(codeEmail).val().trim() == ''){
      errorMessage(codeEmail, "이메일을 입력해 주세요.");
      $(codeEmail).val('').addClass('is-invalid').focus();
      return false;
    }else if ( !emailCheck($(codeEmail).val().trim()) ) { 
      errorMessage(codeEmail, "이메일 형식이 올바르지 않습니다.");
      $(codeEmail).val('').addClass('is-invalid').focus();
      return false; 
    }else{
      $(codeEmail).removeClass('is-invalid');
    }
  }
  
  $(".lost__tab--content.active .identity_content.active .lost__form--code").addClass("active");    

  //시간 연장
  var time = $(".lost__tab--content.active .identity_content.active .code-time .time");
  var leftSec = 180;
  if (isRunning){
    clearInterval(timer);
    time.html("00 : "+leftSec+"");
    startTimer(leftSec, time, codeKey);
  }else{
    startTimer(leftSec, time, codeKey);
  }
});   

$(document).on("click", ".lost__tab--content.active .identity_content.active .code_confirm", function(){
  var codeID = "input.code_data";
  if($(".lost__tab--content.active .identity_content.active "+ codeID).hasClass('disabled')){
      alert("인증 코드 전송을 다시 클릭해주세요.");
      return false;
  }
  
  if($(".lost__tab--content.active .identity_content.active "+codeID).val().trim() == ''){
      alert("인증코드를 입력해주세요.");
      $(".lost__tab--content.active .identity_content.active "+codeID).val('').addClass('is-invalid').focus();
  }else{
      $(".lost__tab--content.active .identity_content.active "+ codeID).removeClass('is-invalid');
      $(this).parents(".lost__form--code").addClass("confirm");
      clearInterval(timer);
  }
});

//아이디(이메일) 유효성 검사
function findID(){    
  var nameID = "input[id='id_name']";
  var telID = "input[id='id_tel']";
  var codeID = "input[id=id_code]";

  if($(nameID).val().trim() == ''){
      errorMessage(nameID, "이름을 입력해주세요.");
      $(nameID).val('').addClass('is-invalid').focus();
      return false;
  }else{
      $(nameID).removeClass('is-invalid');
  }
  
  if($(telID).val().trim() == ""){
      errorMessage(telID, "전화번호를 입력해주세요.");
      $(telID).val('').addClass('is-invalid').focus();
      return false;
  }else if ( !telCheck($(telID).val().trim()) ) { 
      errorMessage(telID, "전화번호를 형식이 올바르지 않습니다.");
      $(telID).val('').addClass('is-invalid').focus();
      return false; 
  }else{
      $(telID).removeClass('is-invalid');
  }

  if(!$(".lost__form--code").hasClass("active")){
      alert("인증 코드 전송을 클릭해 주세요.");
      return false;
  }

  if($(codeID).val().trim() == ''){
      errorMessage(codeID, "인증코드 입력");
      $(codeID).val('').addClass('is-invalid').focus();
      return false;
  }else{
      $(codeID).removeClass('is-invalid');
  }
}