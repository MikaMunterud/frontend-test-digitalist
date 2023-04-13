import BackgroundImage from "../components/homepage/BackgroundImage";
import Products from "../components/homepage/Products";
import "../sass/Homepage.scss";

export default function Homepage() {
  return (
    <section className="mainSection">
      <BackgroundImage />
      <Products />
    </section>
  );
}
