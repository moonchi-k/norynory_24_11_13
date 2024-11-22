import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* align-items: center; */
  justify-content: center;

  .loading {
    position: absolute;
    top: 25%;
  }
`;

const Loading = () => {
  return (
    <Container>
      <SyncLoader class="loading" color="#F99E31" />
    </Container>
  );
};

export default Loading;
