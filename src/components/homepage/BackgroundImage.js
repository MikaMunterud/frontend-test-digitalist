import { FaArrowDown } from "react-icons/fa";
import PresentationBox from "./PresentationBox";

export default function BackgroundImage() {
  const smoothScroll = function () {
    const element = document.querySelector(".productList");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="backgroundImage">
      <PresentationBox clickFunction={smoothScroll} />
      <FaArrowDown className="arrowDown" onClick={smoothScroll} />
    </div>
  );
}
