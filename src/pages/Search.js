import { useState } from "react";
// import styled from "styled-components";
import { useForm } from "react-hook-form";
import { totalInfo } from "../testapi";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [keyData, setKeyData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      // totalInfo()를 호출하여 데이터 가져오기
      const allData = await totalInfo();
      console.log("API에서 받은 데이터:", allData);

      // allData가 undefined 또는 null일 경우 처리
      if (!allData) {
        console.error("API 응답 데이터가 없습니다.");
        return;
      }

      // 데이터를 정상적으로 받았다면 id를 추가하여 dataAddIds 배열을 만듦
      const dataAddIds = allData.map((item, index) => ({
        ...item,
        id: index,
      }));

      // 검색어를 소문자로 변환하여 대소문자 구분 없이 검색
      const keywordLower = keyword.toLowerCase();

      // 'address'가 존재하는지 확인하고, 'address'에 검색어가 포함된 데이터만 필터링
      const searchResult = dataAddIds.filter((item) => {
        // item.address가 존재하고, 주소에 검색어가 포함되어 있는지 체크
        return (
          item.address && item.address.toLowerCase().includes(keywordLower)
        );
      });

      setSearchData(searchResult); // 필터링된 데이터 설정
      setKeyData(keyword); // 검색어 설정
    } catch (error) {
      console.log("API 호출 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSearchResult)}>
        <input
          type="text"
          {...register("keyword", { required: true })}
          placeholder="검색어를 입력하세요"
        />
        {errors.keyword && <span>검색어를 입력해 주세요.</span>}
        <button type="submit">검색</button>
      </form>

      {/* 검색 결과를 출력 */}
      <div>
        <h3>검색된 장소:</h3>
        <ul>
          {searchData.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> - {item.address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
