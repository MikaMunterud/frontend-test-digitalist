import data from "../../data.json";
import ButtonLink from "../buttons/ButtonLink";

export default function PresentationBox({ clickFunction }) {
  const presentation = data.presentation;

  return (
    <div className="presentationBox">
      <h3 className="presentationBox_heading">{presentation.heading}</h3>
      <div className="presentationBox_description">
        {presentation.description.map(function (text, index) {
          return <p key={index}>{text}</p>;
        })}
      </div>
      <ButtonLink
        className={"presentationBox_button"}
        text={"Read more"}
        handleClick={clickFunction}
      />
    </div>
  );
}
