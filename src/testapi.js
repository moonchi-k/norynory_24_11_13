const fetch = require("node-fetch");

const totalUrl =
  "http://api.kcisa.kr/openapi/API_CIA_085/request?serviceKey=244fd8d3-925c-4e70-aaf8-2639add72f6d&numOfRows=20000&pageNo=1";
export const totalInfo = () => {
  return fetch(totalUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const busanArray = data.response?.body?.items.item;

      const detailArray = busanArray.filter(
        (items) =>
          items.address.includes("부산") && items.category1.includes("문화")
      );

      console.log(detailArray);
    });
};
