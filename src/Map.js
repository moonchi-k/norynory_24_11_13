// const Map = () => {
//   const { kakao } = window;
//   const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
//   const options = {
//     //지도를 생성할 때 필요한 기본 옵션
//     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//     level: 3, //지도의 레벨(확대, 축소 정도)
//   };

//   const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
//   return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
// };

// export default Map;

import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapContainerRef = useRef(null); // 카카오 맵을 렌더링할 DOM 요소

  useEffect(() => {
    if (mapContainerRef.current) {
      // 카카오 맵 API 초기화 코드
      const { kakao } = window;

      // 지도 생성
      const map = new kakao.maps.Map(mapContainerRef.current, {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 초기 위치
        level: 3, // 지도 확대 수준
      });

      // 기타 카카오 맵 설정
    }
  }, []); // 의존성 배열이 비어 있어 컴포넌트 마운트 시 한 번만 실행

  return (
    <div ref={mapContainerRef} style={{ width: "500px", height: "400px" }} />
  );
};

export default Map;
