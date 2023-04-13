import data from "../../data.json";
import Product from "./Product";

export default function Products() {
  return (
    <section className="productList">
      {data.products.map(function (product, index) {
        return <Product product={product} key={index} />;
      })}
    </section>
  );
}
