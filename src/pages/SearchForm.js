// SearchForm.js (메인 검색 페이지)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // 검색어를 URL 파라미터로 전달하면서 결과 페이지로 이동
      navigate(`/search-results?address=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="주소를 입력하세요"
          className="search-input"
        />
        <button type="submit" className="search-button">
          검색
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
