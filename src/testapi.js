const fetch = require("node-fetch");

// const totalUrl =
//   "http://api.kcisa.kr/openapi/API_CIA_085/request?serviceKey=244fd8d3-925c-4e70-aaf8-2639add72f6d&numOfRows=20000&pageNo=1";
// export const totalInfo = () => {
//   return fetch(totalUrl, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const busanArray = data.response?.body?.items.item;

//       const detailArray = busanArray.filter(
//         (items) =>
//           items.address.includes("부산") && items.category1.includes("문화")
//       );
//       console.log(detailArray);
//       // console.log(busanArray);
//     });
// };

const API_KEY = "244fd8d3-925c-4e70-aaf8-2639add72f6d";
const BASE_URL = "http://api.kcisa.kr/openapi/API_CIA_085/request";

export const totalInfo = async () => {
  try {
    const params = new URLSearchParams({
      serviceKey: API_KEY,
      numOfRows: "20000",
      pageNo: "1",
    });

    const response = await fetch(`${BASE_URL}?${params}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("API 요청에 실패했습니다");
    }

    const data = await response.json();
    const busanArray = data.response?.body?.items.item;

    const detailArray =
      busanArray?.filter(
        (item) =>
          item.address?.includes("부산") && item.category1?.includes("문화")
      ) || [];

    return detailArray;
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    return [];
  }
};
