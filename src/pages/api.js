// const fetch = require("node-fetch");

// export const noryInfo = () => {
//   const url =
//     "https://apis.data.go.kr/1741000/pfc2/pfc/getPfctInfo2?serviceKey=IFr6Kev%2BzDhhRrHCFEY4i0AXxL5VQ1WwlyFKA%2F3yzoGRdxi0nJ6WFAMiL6l7N5BbOlYSn0%2FF0YxMHxes5WGlnw%3D%3D&pageIndex=20&recordCountPerPage=2000";
//   return fetch(url)
//     .then((response) => response.json()) // 응답을 JSON 형식으로 파싱
//     .then((data) => {
//       // data.items 배열을 가져옵니다.
//       const itemsArray = data.response?.body?.items; // `data` 객체 안에 있는 `items` 배열
//       if (Array.isArray(itemsArray)) {
//         // '부산'이 포함된 주소만 필터링
//         const itemsDetail = itemsArray.filter(
//           (item) => item.rgnCdNm && item.rgnCdNm.includes("부산")
//         );
//         //   .map((item) => ({
//         //     name: item.pfctNm,
//         //     address: item.ronaDaddr,
//         //   }));

//         console.log("검색결과 (부산 포함)", itemsDetail); // 부산을 포함한 아이템 상세 정보 출력
//       } else {
//         console.error("items 배열을 찾을 수 없습니다.");
//       }
//     })
//     .catch((error) => {
//       console.error("API 호출 중 오류 발생:", error);
//     });
// };
// noryInfo();

// export const parkInfo = () => {
//   const url =
//     "http://api.kcisa.kr/openapi/API_CIA_085/request?serviceKey=244fd8d3-925c-4e70-aaf8-2639add72f6d&numOfRows=10&pageNo=1&keyword=%EB%B6%80%EC%82%B0";
//   return fetch(url).then((res) => res.json()); // 응답을 JSON 형식으로 파싱
//   // .then((data) => {
//   //   // data.items 배열을 가져옵니다.
//   //   const itemsArray = data.response?.body?.items; // `data` 객체 안에 있는 `items` 배열
//   //   if (Array.isArray(itemsArray)) {
//   //     // '부산'이 포함된 주소만 필터링
//   //     const itemsDetail = itemsArray.filter(
//   //       (item) => item.rgnCdNm && item.rgnCdNm.includes("부산")
//   //     ); // '부산'이 포함된 항목만 필터링
//   //     //   .map((item) => ({
//   //     //     name: item.pfctNm, // 'pfctNm' 속성이 실제로 존재하는지 확인
//   //     //     address: item.ronaDaddr, // 'ronaDaddr' 속성이 실제로 존재하는지 확인
//   //     //   }));

//   //     console.log("검색결과 (부산 포함)", itemsDetail); // 부산을 포함한 아이템 상세 정보 출력
//   //   } else {
//   //     console.error("items 배열을 찾을 수 없습니다.");
//   //   }
//   // })
//   // .catch((error) => {
//   //   console.error("API 호출 중 오류 발생:", error);
//   // });
// };
// // parkInfo();

// // export const parkInfo = () => {
// //   const url =
// //     "https://apis.data.go.kr/1741000/pfc2/pfc/getPfctInfo2?serviceKey=IFr6Kev%2BzDhhRrHCFEY4i0AXxL5VQ1WwlyFKA%2F3yzoGRdxi0nJ6WFAMiL6l7N5BbOlYSn0%2FF0YxMHxes5WGlnw%3D%3D&pageIndex=1&recordCountPerPage=10000&pfctNm=%EA%B3%B5%EC%9B%90";
// //   return fetch(url)
// //     .then((response) => response.json()) // 응답을 JSON 형식으로 파싱
// //     .then((data) => {
// //       // data.items 배열을 가져옵니다.
// //       const itemsArray = data.response?.body?.items; // `data` 객체 안에 있는 `items` 배열
// //       const itemsDetail = itemsArray.map((items) => ({
// //         name: items.pfctNm,
// //         address: items.rgnCdNm,
// //       }));

// //       console.log("검색결과 (부산 포함)", itemsDetail); // 부산을 포함한 아이템 상세 정보 출력
// //     });
// // };
