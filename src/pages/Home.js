import { useForm } from "react-hook-form";
import { totalInfo } from "../testapi";
import styled from "styled-components";
import { useState } from "react";
// import { totalInfo } from "../testapi";

const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    padding: 0 20px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

const Home = () => {
  const [searchData, setSearchData] = useState();
  const [keyData, setKeyData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      const allData = await totalInfo();
      const dataAddIds = allData.map((item, index) => ({
        ...item,
        id: index,
      }));

      const searchResult = dataAddIds.filter((item) =>
        item.address.includes(keyword)
      );

      setSearchData(searchResult);
      setKeyData(keyword);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSearchResult)}>
      <input
        {...register("keyword")}
        type="text"
        placeholder="어디로 갈까용?"
      />
    </Form>
  );
};

export default Home;

//   const onSearch = async (data) => {
//     const { search: keyword } = data;

//     try {
//       const { results } = await totalInfo(keyword);
//       console.log(results);
//     } catch (error) {
//       console.log("error: " + error);
//     }
//   };
