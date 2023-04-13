import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function DetailsList({ list, hideMenu, heading, localLinks }) {
  return (
    <details className="menuDetails">
      <summary className="menuDetails_summary">
        <h3>{heading}</h3>
        <IoIosArrowForward className="summaryArrow" />
      </summary>

      <ul className="menuDetails_list">
        {list.map(function (item, index) {
          return (
            <li
              className="menuDetails_list_item"
              onClick={hideMenu}
              key={index}
            >
              {localLinks ? (
                <Link
                  className="menuList_item_link"
                  to={`/program/${item.name}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  className="menuList_item_link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </details>
  );
}
