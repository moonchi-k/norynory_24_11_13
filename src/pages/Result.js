import { useLocation } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { totalInfo } from "../testapi";
import { useState } from "react";
import LogoImg from "../components/LogoImg.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  max-width: 450px;
  height: 90vh;
  margin: auto;
  padding: 50px 30px 0 30px;
  background-color: white;
  overflow: scroll;
`;

const Logo = styled.div`
  background: url(${LogoImg}) no-repeat center / cover;
  width: 178px;
  height: 32px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
  padding-left: 10px;
  span {
    font-weight: 700;
  }
`;

const Con = styled.div`
  width: 100%;

  .result-item {
    padding-top: 22px;
    padding-left: 23px;
    padding-bottom: 22px;
    background-color: rgba(249, 158, 49, 0.2);
    border-radius: 10px;
    margin-bottom: 20px;
    position: relative;

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      color: #333;
    }

    .detail-button {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      background-color: #f99e31;
      border: none;
      color: white;
      position: absolute;
      right: 13px;
      top: 19px;
      cursor: pointer;
    }
  }
`;

const Result = () => {
  const location = useLocation();

  // navigate가 페이지 이동시키는거, 동시에 state 에데이터도 담아서 보낼 수 있음.
  // location은 받은 데이터를 알아오는 역할.

  console.log(location);

  const { key: keyword, data: searchData } = location.state || {};

  // 검색 결과가 없을 경우 표시할 메시지
  if (!searchData || searchData.length === 0) {
    return (
      <div className="no-results">
        <h2>검색 결과가 없습니다.</h2>
      </div>
    );
  }
  return (
    <Wrap>
      <Link to={"/"}>
        <Logo></Logo>
      </Link>
      <Title>
        <h3>
          <span>"{keyword}"</span>에 대한 검색 결과{" "}
        </h3>
      </Title>
      <Con>
        <div className="search-results">
          {searchData.map((item, index) => (
            <div key={index} className="result-item">
              <h3>{item.title}</h3>
              <p>{item.address.slice(0, 28) + "..."}</p>
              {/* <p>{item.operatingTime}</p> */}
              <button className="detail-button">자세히</button>
            </div>
          ))}
        </div>
      </Con>
    </Wrap>
  );
};

export default Result;

// onClick={() => navigate(`/detail/${item.id}`)} // 상세 페이지로 이동
