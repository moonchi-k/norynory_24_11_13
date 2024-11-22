import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import LogoImg from "../components/LogoImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchImg from "../components/SearchImg.png";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  background: url(${LogoImg}) no-repeat center / cover;
  width: 178px;
  height: 32px;
  /* margin: 0 auto; */
  margin-bottom: 30px;
`;

const Button = styled.div`
  /* position: absolute;
  left: 0px;
  top: 0px; */
`;

const SearchIcon = styled.div`
  width: 25px;
  height: 25px;
  a {
    all: unset;
    display: block;
    background: url(${SearchImg}) no-repeat center / cover;
    cursor: pointer;
  }
`;

const Wrap = styled.div`
  /* text-align: center; */
  width: 100%;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 20px;
  position: relative;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
`;

const Address = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
`;

const Inform = styled.div`
  line-height: 20px;
  margin-bottom: 20px;
`;

const Operate = styled.div`
  line-height: 20px;
  margin-bottom: 20px;
`;

const Tel = styled.div`
  line-height: 20px;
  margin-bottom: 20px;
`;
const Url = styled.div`
  line-height: 20px;
  margin-bottom: 20px;
  a {
    color: black;
    /* text-decoration-line: underline; */
  }
`;

const Detail = () => {
  const navigate = useNavigate();
  const { title } = useParams(); // URL에서 title 파라미터 추출
  const location = useLocation();
  const { item, searchData } = location.state || {}; // Result 페이지에서 state로 받은 searchData

  if (!item) {
    return <div>검색 결과가 없습니다.</div>;
  }

  // title에 맞는 아이템 찾기
  const founditem = searchData?.find((dataItem) => dataItem.title === title);

  if (!founditem) {
    return <div>해당 아이템을 찾을 수 없습니다.</div>;
  }

  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Header>
        <Button on onClick={handleGoback}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ width: "25px", height: "25px", color: "orange" }}
          />
        </Button>
        <Link to="/">
          <Logo></Logo>
        </Link>

        <SearchIcon>
          <Link to={"/search"}>
            <div
              className="searchBtn"
              style={{ width: "25px", height: "25px" }}
            ></div>
          </Link>
        </SearchIcon>
      </Header>
      <Wrap>
        <Title>{founditem.title}</Title>
        <Address>📍 {founditem.address}</Address>
        {/* 추가적인 세부사항을 여기에 표시 */}
        <Operate>🕰 {founditem.operatingTime || "정보 없음"}</Operate>
        <Inform>📝 {founditem.information || "설명이 없습니다."}</Inform>
        <Tel>📞 {founditem.tel || "설명이 없습니다."}</Tel>
        <Url>
          <a href={founditem.url || "설명이 없습니다."}>
            🌐 {founditem.url || "정보 없음"}
          </a>
        </Url>
      </Wrap>
    </Wrapper>
  );
};

export default Detail;
