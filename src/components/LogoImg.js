import styled from "styled-components";
import LogoImg from "./LogoImg.png";
const Logo = styled.div`
  background: url(${LogoImg}) no-repeat center / cover;
  width: 282px;
  height: 51px;
  margin: 0 auto;
`;
const SLogoImg = () => {
  return <Logo></Logo>;
};

export default SLogoImg;
