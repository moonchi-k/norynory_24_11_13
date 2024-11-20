import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { totalInfo } from "./api";
import Router from "../Router";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = searchParams.get("address");

  useEffect(() => {
    const fetchResults = async () => {
      if (searchTerm) {
        setLoading(true);
        try {
          const searchResults = await totalInfo(searchTerm);
          setResults(searchResults);
        } catch (error) {
          console.error("검색 중 오류 발생:", error);
        }
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div className="results-container">
      <div className="results-header">
        <Link to="/" className="back-button">
          ← 검색으로 돌아가기
        </Link>
        <h2>'{searchTerm}' 검색 결과</h2>
      </div>

      {loading ? (
        <div className="loading">검색 중...</div>
      ) : (
        <div className="results-list">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div key={index} className="result-item">
                <h3>{item.title}</h3>
                <p className="address">주소: {item.address}</p>
                <p className="category">카테고리: {item.category1}</p>
              </div>
            ))
          ) : (
            <p className="no-results">검색 결과가 없습니다.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
