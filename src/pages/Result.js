import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import LogoImg from "../components/LogoImg.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import SearchImg from "../components/SearchImg.png";

// const Wrapper = styled.div`
//   .no-results {
//     h2 {
//       color: #eee;
//     }
//   }
// `;
const Wrap = styled.div`
  max-width: 450px;
  height: 90vh;
  margin: auto;
  padding: 50px 30px 0 30px;
  background-color: white;
  overflow: scroll;
  position: relative;

  a {
    .searchIcon {
      all: unset;
      width: 24px;
      height: 24px;
      background: url(${SearchImg}) no-repeat center / cover;
      position: absolute;
      right: 35px;
      top: 52px;
      cursor: pointer;
    }
  }
`;

const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  h2 {
    color: #888;
    line-height: 20px;
  }

  span {
    color: orange;
    font-weight: 800;
    font-size: 18px;
  }

  button {
    all: unset;
    width: 24px;
    height: 24px;
    background: url(${SearchImg}) no-repeat center / cover;
    position: absolute;
    right: 35px;
    top: 52px;
    cursor: pointer;
  }

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid orange;
    color: orange;
    font-size: 55px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

const SearchIcon = styled.div`
  a {
    all: unset;
    width: 24px;
    height: 24px;
    background: url(${SearchImg}) no-repeat center / cover;
    position: absolute;
    right: 35px;
    top: 52px;
    cursor: pointer;
  }
`;

const Button = styled.div`
  all: unset;
  width: 24px;
  height: 24px;
  background: url(${SearchImg}) no-repeat center / cover;
  position: absolute;
  right: 35px;
  top: 52px;
  cursor: pointer;
`;

const Logo = styled.div`
  background: url(${LogoImg}) no-repeat center / cover;
  width: 178px;
  height: 32px;
  margin: 0 auto;
  margin-bottom: 45px;
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

const ResultCon = styled.div`
  position: relative;
  /* box-sizing: ; */
  /* padding-right: 20px; */
  a {
    font-size: 16px;
    font-weight: 400;
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
      width: 200px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      color: #333;
      width: 200px;
      line-height: 18px;
    }
  }
  .detail-button {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #f99e31;
    border: none;
    color: white;
    position: absolute;
    right: 23px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 14px;
    text-align: center;
  }
`;

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // navigate가 페이지 이동시키는거, 동시에 state 에데이터도 담아서 보낼 수 있음.
  // location은 받은 데이터를 알아오는 역할.

  const { key: keyword, data: searchData } = location.state || {};

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchData) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [searchData]);

  if (loading) {
    return (
      <Wrapper>
        <Logo></Logo>

        <Loading />
      </Wrapper>
    );
  }

  // 검색 결과가 없을 경우 표시할 메시지
  if (!searchData || searchData.length === 0) {
    return (
      <Wrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>

        <SearchIcon>
          <Link to={"/search"}>
            {/* <button className="searchBtn"></button> */}
          </Link>
        </SearchIcon>

        <div className="no-results">
          <NoResult>
            <div>!</div>
            <h2>
              검색하신 <span>{keyword}</span>에 대한 <br /> 검색 결과가
              없습니다.
            </h2>
          </NoResult>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrap>
      <Link to={"/"}>
        <Logo></Logo>
      </Link>

      <Link to={"/search"}>
        <button class="searchIcon"></button>
      </Link>

      <Title>
        <h3>
          <span>"{keyword}"</span>에 대한 검색 결과{" "}
        </h3>
      </Title>
      <Con>
        <div className="search-results">
          {searchData.map((item, title) => (
            <ResultCon>
              <div key={title} className="result-item">
                <h3>{item.title}</h3>
                <p>{item.address}</p>
                {/* <p>{item.operatingTime}</p> */}
                <Link to={`/detail/${item.title}`} state={{ item, searchData }}>
                  <button className="detail-button">자세히</button>
                </Link>
              </div>
            </ResultCon>
          ))}
        </div>
      </Con>
    </Wrap>
  );
};

export default Result;
