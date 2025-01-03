import { useState } from "react";
// import styled from "styled-components";
import { useForm } from "react-hook-form";
import { totalInfo } from "../testapi";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import LogoImg from "../components/LogoImg.png";
import SearchImg from "../components/SearchImg.png";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Logo = styled.div`
  background: url(${LogoImg}) no-repeat center / cover;
  width: 178px;
  height: 32px;
  margin: 0 auto;
  margin-bottom: 52px;
`;
const Form = styled.form`
  all: unset;
  position: relative;
  /* text-align: center; */
  display: block;
  width: 100%;
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-left: 2px;
    margin-bottom: 14px;
  }

  input {
    width: 100%;
    height: 60px;
    background-color: #feecd6;
    border-radius: 80px;
    border: none;
    padding: 20px;
    margin-bottom: 20px;
    &::placeholder {
      font-size: 14px;
      color: gray;
      border: none;
    }
    color: #333;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }

  button {
    all: unset;
    width: 24px;
    height: 24px;
    background: url(${SearchImg}) no-repeat center / cover;
    position: absolute;
    right: 20px;
    top: 52px;
    cursor: pointer;
  }

  span {
    color: #666;
  }
`;

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [keyData, setKeyData] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSearchResult = async (data) => {
    const { keyword } = data;

    setLoading(true);
    try {
      const noryAllData = await totalInfo(); // API 호출 후 데이터 받기
      console.log("noryAllData:", noryAllData); // noryAllData의 구조 확인

      // 데이터가 배열인지 확인
      if (!Array.isArray(noryAllData)) {
        console.error("noryAllData는 배열이 아닙니다.");
        setLoading(false);
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

      setLoading(false);

      navigate("/result", { state: { key: keyword, data: searchResult } });
    } catch (error) {
      console.log("검색 오류:", error);
    }
  };

  return (
    <Wrapper>
      <Link to={"/"}>
        <Logo></Logo>
      </Link>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <h3>가고 싶은 곳을 검색해보세요!</h3>
        <input
          type="text"
          {...register("keyword", { required: true })}
          placeholder="Ex) 해운대, 기장.... "
        />

        <button type="submit"></button>

        {errors.keyword && <span>검색어를 입력해 주세요.</span>}
      </Form>

      {loading && <Loading />}
    </Wrapper>
  );
};

export default Search;
