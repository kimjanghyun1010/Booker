import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './kakaoAddress.css';

//npm i react-daum-postcode 



class Postcode extends Component {
  state = {
    roadAddr: '',
    detail: '',
    address: '',
    
  }
  onComplete = (data) => {
    // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
    var roadAddr = data.roadAddress; // 도로명 주소 변수
    var extraRoadAddr = ''; // 참고 항목 변수

    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
      extraRoadAddr += data.bname;
    }
    // 건물명이 있고, 공동주택일 경우 추가한다.
    if (data.buildingName !== '' && data.apartment === 'Y') {
      extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
    }
    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    if (extraRoadAddr !== '') {
      extraRoadAddr = ' (' + extraRoadAddr + ')';
    }

    // 우편번호와 주소 정보를 해당 필드에 넣는다.
    document.getElementById('sample4_postcode').value = data.zonecode;
    document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

    document.getElementById("sample6_detailAddress").focus();

    document.getElementById("sample4_roadAddress").value = roadAddr;

    // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
    if (roadAddr !== '') {
      document.getElementById("sample4_extraAddress").value = extraRoadAddr;
    } else {
      document.getElementById("sample4_extraAddress").value = '';
    }

    var guideTextBox = document.getElementById("guide");
    // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
    if (data.autoRoadAddress) {
      var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
      guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
      guideTextBox.style.display = 'block';

    } else if (data.autoJibunAddress) {
      var expJibunAddr = data.autoJibunAddress;
      guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
      guideTextBox.style.display = 'block';
    } else {
      guideTextBox.innerHTML = '';
      guideTextBox.style.display = 'none';
    }
    console.log(roadAddr)
    this.setState({
      roadAddr: roadAddr,
    })


  }

  handleChange = (e) => {
    this.setState({
      detail: e.target.value
    });

    console.log(this.state.roadAddr, this.state.detail)

    
  }

  buildaddress = (e) => {
    this.setState({
      address: this.state.roadAddr + '  '+ this.state.detail
    });
  }

  sendaddress = (e) =>{
    window.opener.document.getElementById("login_address_input").value = this.state.address
    window.opener.postMessage(this.state.address);
    window.close();
  }



  render() {
    

    return (
      
      <div>
        <DaumPostcode
          onComplete={this.onComplete}
        />
        <input type="text" id="sample4_postcode" placeholder="우편번호" />
        <input type="button" onclick="sample4_execDaumPostcode()" value="우편번호 찾기" />
        <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
        <input type="text" id="sample4_jibunAddress" placeholder="지번주소" />
        <span id="guide"  ></span>
        <input onChange={this.handleChange} type="text" id="sample6_detailAddress" placeholder="상세주소" />
        <span id="guide"  ></span>
        <button className= "input_button" onClick={this.buildaddress} >입력</button>
        <input type="text" id="sample4_extraAddress" placeholder="참고항목" />
        

        <div className="address_box">
          <div>{this.state.address}</div>
          <button onClick={this.sendaddress}>확인</button>
        </div>
      </div>

    );

  }

}
export default Postcode;