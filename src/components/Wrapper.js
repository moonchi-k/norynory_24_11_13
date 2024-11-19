import styled from "styled-components";
import BgsImg from "./BgImg.png";

const Container = styled.div`
  max-width: 450px;
  height: 90vh;
  /* background-color: #fff; */
  /* margin: auto; */
  background: url(${BgsImg}) no-repeat center / cover;
  /* margin: 0 30px 0 30px; */
  margin: auto;
  padding: 50px 30px 0 30px;
`;
const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
