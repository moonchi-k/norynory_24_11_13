import Wrapper from "../components/Wrapper";

const Detail = (searchData) => {
  return (
    <Wrapper>
      {/* 검색 결과를 출력 */}
      <div>
        {/* <h3>검색된 장소:</h3> */}
        <ul>
          {searchData.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - {item.address}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Detail;
