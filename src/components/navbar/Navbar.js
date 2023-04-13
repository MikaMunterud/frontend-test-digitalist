import { useState } from "react";
import MenuList from "./MenuList";
import SearchBox from "./SearchBox";
import MenuIcons from "./MenuIcons";
import { useNavigate } from "react-router-dom";
import "../../sass/navbar/Navbar.scss";

export default function Navbar() {
  const [menuList, setMenuList] = useState("");
  const [menu, setMenu] = useState(true);
  const [cross, setCross] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    if (menu) {
      setMenu(false);
      setCross(true);
      setMenuList("visible");
    } else {
      hideMenu();
    }
  }

  function hideMenu() {
    setCross(false);
    setMenu(true);
    setMenuList("");

    /*
     * This closes all details lists in the menu when closing.
     */
    const details = document.querySelectorAll("details");
    details.forEach(function (list) {
      list.removeAttribute("open");
    });
  }

  const goToHomepage = function () {
    navigate("/");
  };

  return (
    <header className="fixedHeader">
      <div className="relativeHeader">
        <img
          className="companyLogo"
          src="https://icicathy.sirv.com/FrontEnd-test-Digitalist/digitalist_logo.svg"
          alt="Company logo"
          width={"200"}
          onClick={goToHomepage}
        />

        <div className="navIcons">
          <SearchBox searchBox={searchBox} setSearchBox={setSearchBox} />

          <nav className="navIcons_menu">
            <MenuIcons toggleMenu={toggleMenu} menu={menu} cross={cross} />

            <MenuList
              menuList={menuList}
              searchBox={searchBox}
              hideMenu={hideMenu}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
