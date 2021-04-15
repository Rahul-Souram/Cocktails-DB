import React from "react";
import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const valueRef = useRef("");

  useEffect(() => {
    valueRef.current.focus();
  }, []);

  const handle = (e) => {
    e.preventDefault();
  };
  const search = () => {
    setSearchTerm(valueRef.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handle}>
        <div className="form-control">
          <label htmlFor="name" style={{ textAlign: "center" }}>
            Search your favourite cocktail
          </label>
          <input type="text" id="name" ref={valueRef} onChange={search} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
