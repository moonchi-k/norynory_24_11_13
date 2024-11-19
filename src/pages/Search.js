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
      const noryAllData = await totalInfo(); // API 호출 후 데이터 받기
      console.log("noryAllData:", noryAllData); // noryAllData의 구조 확인

      // 데이터가 배열인지 확인
      if (!Array.isArray(noryAllData)) {
        console.error("noryAllData는 배열이 아닙니다.");
        return;
      }

      // 필터링 조건: 부산과 검색어(keyword), 카테고리1이 '문화' 포함
      const searchResult = noryAllData.filter(
        (items) =>
          items.address &&
          items.address.includes("부산") &&
          items.address.includes(keyword) &&
          items.category1 &&
          items.category1.includes("문화")
      );

      setSearchData(searchResult); // 검색된 결과로 상태 업데이트
      setKeyData(keyword); // 키워드 상태 업데이트
    } catch (error) {
      console.log("검색 오류:", error);
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
            <li key={item.index}>
              <strong>{item.title}</strong> - {item.address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
