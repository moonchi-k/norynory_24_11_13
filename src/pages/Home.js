import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { GlobalStyled } from "../GlobalStyled";
// import BgsImg from "./BgImg.png";
import { BrowserRouter, HashRouter, Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import LogoImg from "../components/LogoImg";
const Title = styled.div`
  margin: 0 auto;
  text-align: center;
  /* width: 50%; */

  a {
    button {
      all: unset;
      background-color: #f99e31;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-top: 30px;
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>
        <LogoImg></LogoImg>
        <Link to={"/search"}>
          <button>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ width: "25px", height: "25px", color: "white" }}
            />
          </button>
        </Link>
      </Title>
    </Wrapper>
  );
};

export default Home;
