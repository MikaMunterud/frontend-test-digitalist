import { Link } from "react-router-dom";
import data from "../../data.json";
import DetailsList from "../listTypes/DetailsList";
import IconLink from "../buttons/IconLink";
import { ImGithub } from "react-icons/im";
import { SiLinkedin, SiInstagram } from "react-icons/si";

export default function MenuList({ menuList, searchBox, hideMenu }) {
  return (
    <ul
      className={`menuList ${menuList} ${
        menuList === "visible" && searchBox ? "searchBox" : ""
      }`}
    >
      <li className="menuList_item">
        <Link className="menuList_item_link" to={"/"} onClick={hideMenu}>
          <h3>Homepage</h3>
        </Link>
      </li>
      <li className="menuList_item">
        <DetailsList
          list={data.products}
          hideMenu={hideMenu}
          localLinks={true}
          heading={"Programs"}
        />
      </li>
      <li className="menuList_item">
        <DetailsList
          list={data.contactInfo}
          hideMenu={hideMenu}
          localLinks={false}
          heading={"Contact"}
        />
      </li>
      <li className="menuList_item icons">
        <IconLink
          link={"https://www.linkedin.com/in/mikamunterud94/"}
          linkText={"LinkedIn link"}
          icon={<SiLinkedin />}
        />
        <IconLink
          link={"https://github.com/MikaMunterud/frontend-test-digitalist"}
          linkText={"GitHub link"}
          icon={<ImGithub />}
        />

        <IconLink
          link={"https://www.instagram.com/onegirlexploringtheworld/"}
          linkText={"Instagram ink"}
          icon={<SiInstagram />}
        />
      </li>
    </ul>
  );
}
