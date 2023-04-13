import { useNavigate } from "react-router-dom";
import ButtonLink from "../buttons/ButtonLink";

export default function Product({ product }) {
  const navigate = useNavigate();
  const handleClick = function () {
    navigate(`/program/${product.name}`);
  };

  return (
    <div className="product">
      <img
        className="product_image"
        src={product.image}
        alt={`Logo of ${product.image}`}
      />
      <h2 className="product_heading">{product.name.toUpperCase()}</h2>
      <p className="product_description">{product.description}</p>
      <div className="product_buttonContainer">
        <ButtonLink
          className={"product_button"}
          text={"Read more"}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
