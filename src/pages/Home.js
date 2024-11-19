import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { GlobalStyled } from "../GlobalStyled";
import BgsImg from "./BgImg.png";
import { BrowserRouter, HashRouter, Link } from "react-router-dom";

const Wrap = styled.div`
  max-width: 450px;
  height: 90vh;
  /* background-color: #fff; */
  margin: auto;
  background: url(${BgsImg}) no-repeat center / cover;
  padding-top: 135px;
`;

const Title = styled.div`
  margin: 0 auto;
  text-align: center;
  /* width: 50%; */
  h2 {
    font-family: "Bagel Fat One", system-ui;
    color: #f1592a;
    font-weight: 600;
    font-size: 50px;
    letter-spacing: 1px;
  }

  button {
    all: unset;
    background-color: #f99e31;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 30px;
  }
`;

const Home = () => {
  return (
    <HashRouter>
      <Wrap>
        <Title>
          <h2> NoryNory!</h2>
        </Title>
        <Link to={"/search"}>
          <button>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ width: "25px", height: "25px", color: "white" }}
            />
          </button>
        </Link>
      </Wrap>
    </HashRouter>
  );
};

export default Home;
