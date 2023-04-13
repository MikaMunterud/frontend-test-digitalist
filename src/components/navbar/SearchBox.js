import { useState } from "react";
import { ImSearch } from "react-icons/im";

export default function SearchBox({ searchBox, setSearchBox }) {
  const [searchBoxValue, setSearchBoxValue] = useState("");

  const showSearchBox = function () {
    if (searchBox) {
      setSearchBox(false);
      setSearchBoxValue("");
      return;
    }
    setSearchBox(true);
  };

  return (
    <div className="searchBox">
      <div className={`searchBox_box ${searchBox ? "visible" : ""}`}>
        <input
          className={`searchBox_box_input ${searchBox ? "visible" : ""}`}
          id="searchBox"
          type="search"
          value={searchBoxValue}
          placeholder={"Search..."}
          onChange={(e) => setSearchBoxValue(e.target.value)}
        />
      </div>
      <label
        htmlFor="searchBox"
        className={`searchBox_icon`}
        onClick={showSearchBox}
      >
        <ImSearch />
      </label>
    </div>
  );
}
