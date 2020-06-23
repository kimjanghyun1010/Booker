/*global kakao*/
import React, { Component } from 'react';
import styled from "styled-components";


class KaKaoMapPin extends Component {


  constructor(props) {
    super(props);
    this.kakao = kakao.maps;
    this.state = {
      store_address: this.props.store_address
    };
  }



  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.store_address !== nextProps.store_address) {
      nextState.store_address = nextProps.store_address;
      this.pinUpdate();
    }
  }

  pinUpdate() {
    console.log(this.state.store_address);

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=578ab80efc962c8896041d249c985d25&autoload=false";
    document.head.appendChild(script);

    let container = document.getElementById('Mymap');
    let options = {
      center: new kakao.maps.LatLng(37.506502, 127.053617),
      level: 1
    };

    let map = new window.kakao.maps.Map(container, options);
    let geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(this.state.store_address, function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다


        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }


    })

  }

  render() {
    return <MapContents id="Mymap"></MapContents>;
  }
}

const MapContents = styled.div`
width: 94%;
margin-left: 3%;
  height: 500px;`;

export default KaKaoMapPin;
